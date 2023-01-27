import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Usuarios extends Component {
  render() {
    return (
      <div>
        {this.props.usuarios.active}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    usuarios: state.usuariosReducer
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)