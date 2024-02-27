import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default class Login extends Component {
  render() {
    return (
      <div>
        <div class="container">
        <div class="jumbotron row"><br></br>
            <div class="jumbotron col-md-4 offset-lg-4"><br></br>
                <form>
                    <h2 class="text-center">Login Page</h2>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button><br></br>
                    <h4>Forget My Password <Link to="/forgot">Click Here</Link></h4>
                </form>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
