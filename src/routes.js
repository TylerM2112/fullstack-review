import React, { Fragment }from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import AccountContainer from './components/AccountContainer';

export default <Fragment>
    <Route exact path="/" component={Login} />
    <Route path="/account" component={AccountContainer} />
   </Fragment>