import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Forgot from '../components/Forgot';
import Profile from '../components/Profile';
import Reset from '../components/Reset';

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
            {/* reset password */}
          <Route path="/reset" element={<Reset />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    );
  }
}
