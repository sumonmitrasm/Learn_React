import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from '../components/Home';
import Login from '../components/Login';

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}
