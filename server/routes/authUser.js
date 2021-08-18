const jwt = require('jsonwebtoken')
const { user } = require('../config/db')
const env = require('../config/secret.env')
const mongoose = require('mongoose')
const crypto = require('crypto')

const emailRegex = /\S+@\S+\.\S+/

const login = (req, res) => {
    user.findOne({email: req.body.email}, (err, result) => {
        if(err)
            return res.status(500).json("Internal error")

        else if(result && result.password === req.body.password) {
            return res.status(200).json({ result, token: getJWT(result.toJSON())})
        }

        else
            return res.status(202).json('Usúario/Senha inválidos')
    })
}

const getJWT = data => jwt.sign(data, env.authSecret, {expiresIn: "30 days"})
const decodeJWT = token => jwt.decode(token)

const tradeTokenToUser = (req, res) => {
    let data = jwt.decode(req.headers['authorization']);

    res.status(200).json(data);
}

const signup = (req, res) => {

    let dataNewUser = req.body

    if(!dataNewUser.email.match(emailRegex))
        return res.status(202).json('Email inválido')
    
    else if (dataNewUser.password.length < 4)
        return res.status(202).json('A senha deve ter no mínimo 4 digitos')

    user.findOne({ email: dataNewUser.email}, (err, result) => {
        if(err)
            return res.status(500).json('Internal server error')
        
        else if(result !== null)
            return res.status(202).json('O email já está em uso')

        else {
            new user(dataNewUser).save(err => 
                err ?
                    res.status(202).json('Erro ao criar usuário: ' + err) :
                    res.status(200).json('Usuário criado com sucesso!')  
            )
        }
    })
}

const validateToken = (req, res) =>
    jwt.verify(req.body.token, env.authSecret, (err, decoded) =>
        res.status(200).json({ valid: !err}))

const updateUser = (req, res) => {
    const data = req.body;

    let changePassword = false;

    if(data['newPassword'] != null) {
        changePassword = true

        if(data['newPassword'].length < 4)
            return res.status(202).json('A senha deve ter no mínimo 4 digitos')
    }

    user.findOne({_id: decodeJWT(req.headers['authorization'])._id }, (err, result) => {
        if(err)
            return res.status(500).json('Internal server error!')
    
        user.updateOne({_id: decodeJWT(req.headers['authorization'])._id }, data)
            .then(response => {
                user.findOne({_id: decodeJWT(req.headers['authorization'])._id }, (err, result) => 
                    res.status(200).json({result, token: getJWT(result.toJSON())})
                )
            }).catch(err => res.status(202).json('Internal server error!'))
    })
}

const updateToken = (req, res) => 
    user.findOne(
        { 
            _id: mongoose.Types.ObjectId(decodeJWT(req.headers['authorization'])._id)
        }, (err, result) => 
        err ?
            res.status(202).json("Internal error") :
            res.status(200).json({token: getJWT(result.toJSON()), result})
    )

module.exports = {login, signup, validateToken, updateToken, tradeTokenToUser, updateUser, decodeJWT}