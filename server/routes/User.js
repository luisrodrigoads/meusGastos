const { user } = require('../config/db');

const emailRegex = /\S+@\S+\.\S+/;

module.exports = {

    signup (req, res) {

        let dataNewUser = req.body
        console.log(dataNewUser.email + 'email no server');
        //checks if the email received is really an email
        if(!dataNewUser.email.match(emailRegex))
            return res.status(202).json('Email inválido.')
    
        else if(dataNewUser.password.length < 5)
            return res.status(202).json('A senha deve ter no mínimo 5 digitos')
    
        //if no errors are found, check if the email already exists, if not a new user is created
        user.findOne({email: dataNewUser.email}, (err, result) => {
            if(err)
                return res.status(500).json('Internal server error')
    
            else if(result !== null)
                return res.status(202).json('O email já está em uso')
    
            else {
                
                new user(dataNewUser).save(err => 
                    err ?
                        res.status(202).json('Erro cadastrando usuário: ' + err) :
                        res.status(200).json('Usuário criado com sucesso!')
                )
            }
        })
    
       
    },

    update(req, res) {

        let data = req.body;
       
        let changePassword = false;

        if(data['newPassword'] != null){
            changePassword = true
            if(data['newPassword'] != data['newPasswordConfirm'])
                return res.status(202).json('Senhas não conferem')

            else if(data['newPassword'].length < 5)
                return res.status(202).json('A senha deve ter no mínimo 5 digitos')

        }

        user.findOneAndUpdate({_id: req.decoded._id}, {data }, {new: true}, (err, result) => {
            if(err)
                return res.status(500).json('Internal server error!')
            
            return res.status(200).json(result)
        }) 
        
    
    },

    delete(req, res) {
        const idUser = req.params.id;
        /*const userData = user.findByIdAndDelete(idUser);*/
        user
            .deleteOne({ _id : idUser})

            .exec((err, result) => {
                if(err) res.status(400).json(err);
                else {
                    res.status(200).json({result});
                }
            })

    }

}