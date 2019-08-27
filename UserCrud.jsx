import React, { Component } from 'react'
import Main from '../template/Main'

const heardProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro: Incluir, Lista, Alterar e Excluir!'
}

export default class UsersCrud extends Component {
    render(){
        return(
            <Main {...heardProps}>
                Teste de cadastro
            </Main>
        )
    }
}