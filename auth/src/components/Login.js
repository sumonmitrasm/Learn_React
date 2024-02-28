import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      message:"",
      loggedIn: false // Initialize loggedIn state
    };
  }
  //after form aubmit
  formSubmit = (e) =>{
    e.preventDefault();
    const data={
      email:this.state.email,
      password:this.state.password
    }
    axios.post('/api/login',data)
   .then((response)=>{
    localStorage.setItem('token',response.data.token);
    this.setState({
      loggedIn:true
    })
    this.props.setUser(response.data.user);
   })
   .catch((error)=>{
    console.log(error);
   })
  }
  render() {
    if (this.state.loggedIn) {
      return <Navigate to="/profile" />;
    }
    return (
      <div>
        <div class="container">
        <div class="jumbotron row"><br></br>
            <div class="jumbotron col-md-4 offset-lg-4"><br></br>
                <form onSubmit={this.formSubmit}>
                    <h2 class="text-center">Login Page</h2>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name="email" class="form-control" id="email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" id="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button><br></br>
                    <h4>Forget My Password <Link to="/forgot">Click Here</Link></h4>
                    <h4>I don't have account <Link to="/register">Regoster Now</Link></h4>
                </form>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
