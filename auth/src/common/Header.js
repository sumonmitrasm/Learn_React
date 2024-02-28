import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Forgot from '../components/Forgot';
import Profile from '../components/Profile';
import Reset from '../components/Reset';
import axios from 'axios';
export default class Header extends Component {
  state={
    user:{}
  }
  componentDidMount(){
    axios.get('/api/user')
   .then((response)=>{
    this.setUser(response.data)
   })
   .catch((error)=>{
    console.log(error);
   })
  }
  setUser=(user)=>{
    this.setState({user:user})
  }
  render() {
    return (
      <Router>
        <div>
          <Nav user={this.state.user} setUser={this.setUser} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
            {/* reset password */}
          <Route path="/reset" element={<Reset />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          {/* <Route path="/profile" element={()=> <Profile user={this.state.user} setUser={this.setUser}/>} /> */}
          <Route path="/profile" element={<Profile user={this.state.user} setUser={this.setUser} />} />

        </Routes>
      </Router>
    );
  }
}
