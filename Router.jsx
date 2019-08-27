import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
//escolha, rota, redirecionar
import Home from '../componente/home/Home'
import UserCrud from '../componente/user/UserCrud'

export default props =>
<Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/User' component={UserCrud}/>
    <Redirect from ='*' to='/' />
</Switch>