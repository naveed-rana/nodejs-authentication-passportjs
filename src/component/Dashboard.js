import React, { Component } from 'react';
import axios from 'axios';
class Dashboard extends Component {
  constructor(props){
  super(props);
  this.onClick = this.onClick.bind(this);
  this.state = {
    user:false
  }
  }
  componentWillMount = () => {
    axios.post("/dashboard", { message: "plesa loug" }).then((response) => {
      console.log("response");
      console.log(response);
      
      
      this.setState({
        user:true
      })
    }).catch((err) => {
      alert("user is not authentcated!");
     
      this.props.history.push('/login');
    })
  };
  
  onClick(){
    axios.post("/logout",{message:"plesa loug"}).then((response)=>{
      this.setState({
        user: false
      })
      this.props.history.push('/');
    }).catch((err)=>{
      alert("error  has been occored!");
    })
  }
  render() {
    return (
      <div>
           {this.state.user ?  
           <div>
            <h1>Wellcom To User </h1> 
            <button onClick={this.onClick}>Logout</button>
            </div>
            :
            <div></div>
           }
      </div>
    )
  }
};
export default Dashboard;
