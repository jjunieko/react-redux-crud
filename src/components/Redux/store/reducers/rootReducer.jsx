import { combineReducers } from 'react-redux';

import usuariosReducer from './usuarios.reducer';

//junta varios combos para reducer ex: produtosReducer

const rootReducer = combineReducers({
    usuariosReducer
})


export default rootReducer;