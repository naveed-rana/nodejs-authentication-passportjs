import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../style/style.css';
import Head from './header';
import axios from 'axios';

class Login extends Component{
    render(){
        return(
            <div className='container'>
            <Head/>
                <form className="panel loginpanel" onSubmit={(e) =>{


                    e.preventDefault();
                    var data = {
                        name:this.refs.name.value,
                        password:this.refs.password.value
                    }
                    console.log(data);

                    axios.post('/login',data).then((res)=>{
                        
                        this.props.history.push('/dashboard');
                        
                          console.log(res);
                          
                    }).catch((err)=>{
                        console.log(err);
                        
                    })
                    

                }



                }>
                    <div className="panel-header2">Login</div>
                    <div className="panel-body">
                        <div className="form-group group2">
                            <div>
                                <h4>Email or Phone Number</h4>
                                <input ref="name" type="text" required className="form-control"/><br/>
                                <h4>Password</h4>
                                <div className="input-group">
                                    <input ref="password" type="password" required className="form-control"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-success"><span className="glyphicon glyphicon-eye-open"></span></button>
                                    </div>
                                </div><br/>
                                <div className="checkbox input-group">
                                    <input type="checkbox"/>
                                    <h4 className="input-group-h5">Remember Password ?</h4>
                                </div><br/>
                                <button type="submit" className="btn btn-success btn-block">Sign In</button><br/>
                                <h4><a href="#">Forgot Password?</a></h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
                                      
        )
    }
}
export default Login;