import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk';
import UsuariosNavegacao from './navegacao/UsuariosNavegacao';
import usuariosReducer from './store/usuarios-reducer'

const rootReducer = combineReducers({
  usuarios: usuariosReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return <Provider store={store}>
        <UsuariosNavegacao />
        </Provider>

}
