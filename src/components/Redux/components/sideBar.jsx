import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeUser } from '../store/actions/usuarios.action'

export class SideBar extends Component {
  render() {
    return (
      <ul>
            <div>
                    {
                        this.props.usuarios.list.map((user, index) => {
                            <li key={index}>{user}
                            <button onClick={() => this.props.changeUser(user)}>Selecionar</button>
                            </li>
                        })
                    }
                </div>
      </ul>  
      
    )
  }
}

const mapStateToProps = (state) => ({
    usuarios: state.usuariosReducer
})

const mapDispatchToProps = dispatch => ({
    changeUser: (user) => dispatch(changeUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)