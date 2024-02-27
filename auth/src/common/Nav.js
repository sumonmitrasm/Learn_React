import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-warning">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Self Learn Project</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="#">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="#">Profile</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link disabled">Disabled</Link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <Link class="nav-link" to="/login">Login</Link>&nbsp;&nbsp;
                    <Link class="nav-link" href="#">Register</Link>
                </form>
                </div>
            </div>
            </nav>
      </div>
    )
  }
}
