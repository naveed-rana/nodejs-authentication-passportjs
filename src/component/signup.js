import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../style/style.css';
import Head from './header';
import axios from 'axios';
class Signup extends Component{
    render(){
        return(
            <div className='container'>
            <Head/>
        <form className="panel signuppanel" onSubmit={(e)=>{
                e.preventDefault();

                let data = {
                    name:this.refs.fname.value + " "+this.refs.lsname.value,
                    password:this.refs.password.value,
                    email:this.refs.email.value,
                    cell:this.refs.cell.value
                }
                console.log("signup");
                console.log(data);
                
                    axios.post('/signup', data)
                        .then(function (response) {
                            console.log(response);
                            this.props.history.push('/login');
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                

        }}>
            <div className="panel-header">Sign Up</div>
            <div className="panel-body">
                <div className="form-group group1">
                    <div>
                        <input ref="fname" type="text" placeholder="First Name" required className="form-control name1"/>
                        <input ref="lsname" type="text" placeholder=" Last Name" required className="form-control name2"/>
                        <input ref="cell" type="text" placeholder="Phone Number" required className="form-control"/>
                        <input ref="email" type="email" placeholder="Email" required class="form-control"/>
                        <div className="input-group">
                            <input ref="password" type="password" placeholder="Password" required className="form-control"/>
                            <div className="input-group-btn">
                                <button className="btn btn-primary input"><span className="glyphicon glyphicon-eye-open"></span></button>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button><br/>
                    </div>
                </div>
            </div>
        </form>
    </div>
           
            
        )
    }
}

export default Signup;