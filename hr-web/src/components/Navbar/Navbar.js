import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand">Logo</a>
                    </div>
                    <ul class="nav navbar-nav" style={{margin: "0px 580px"}}> 
                        <li class="nav-item"><Link to="/"><span class="glyphicon glyphicon-home" style={{fontSize: "20px", color: "white"}}></span></Link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link to="/home"><span class="glyphicon glyphicon-user"></span>{' '} Jagadish Ramidi</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;