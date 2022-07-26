import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ResourceManagement from './ResourceManagement/ResourceManagement';
import ManageUsers from './ManageUsers/ManageUsers';

class Main extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/resource" component={ResourceManagement} />
                <Route path="/form" component={ManageUsers} />
            </Switch>
        )
    }
}

export default Main;