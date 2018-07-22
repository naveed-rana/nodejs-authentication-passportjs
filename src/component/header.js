import React,{Component} from 'react';
import '../css/bootstrap.min.css';
import {Link} from 'react-router-dom';
class Head extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Simple</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                            <Link to="/">Home </Link>
                            </li>
                            <li><a href="#">Stories</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Contact</a></li>
                            <li>
                                <Link to="/signup">
                                <span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li>
                                <Link to="/login">
                                <span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Head;