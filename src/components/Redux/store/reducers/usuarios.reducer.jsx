


const initialState = {
    // usuarios: [
    //     'joao',
    //     'pedro',
    //     'jorge',
    //     'mathues'
    // ]

    usuarios:{
        active: null,
        list:[
                'joao',
                'pedro',
                'jorge',
                'mathues'
            ]

    }
}


const usuariosReducer = (state = initialState.usuarios, action) => {
    if(action.type == 'CHANGE_USER'){
        return {
            ...state, active: action.payload
        }
    }
    return state;

}

export default usuariosReducer;