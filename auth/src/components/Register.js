import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Register extends Component {
  state={
    name:"",
    email:"",
    password:"",
    password_confirmation:"",
    message:""
  }
  formSubmit=(e)=>{
    e.preventDefault();
    const data={
      name:this.state.name,
      email:this.state.email,
      password:this.state.password,
      password_confirmation:this.state.password_confirmation,
    }
    axios.post('register',data)
    .then((response)=>{
      localStorage.setItem('token',response.data.token);
      this.setState({
        loggedIn:true
      })
      this.props.setUser(response.data.user);
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron row"><br></br>
              <div className="jumbotron col-md-4 offset-lg-4"><br></br>
                <div className='card' style={{ backgroundColor: '#C2C0BE' }}>
                    <form onSubmit={this.formSubmit}>
                        <h2 className="text-center">Register Page</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">User Name</label>
                            <input type="text" name="name" className="form-control" id="name" required onChange={(e)=>{this.setState({name:e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" id="email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Confirm Password</label>
                            <input type="password" name="password_confirmation" className="form-control" id="password_confirmation" required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" name='checkbox' id="checkbox"/>
                            <label className="form-check-label" htmlFor="checkbox">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button><br></br>
                        <h4>I have already have accout<Link to="/login">Login Here</Link></h4>
                    </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
