import React from 'react';
import {Provider} from 'react-redux';
import  AppRoutes  from './Main/routes';
import store from './store';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <AppRoutes />
        <ReduxToastr
          timeOut={3500}
          newestOnTop={true}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick/>
      </>
    </Provider>
  );
}
