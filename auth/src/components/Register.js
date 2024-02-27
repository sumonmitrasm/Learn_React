import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron row"><br></br>
              <div className="jumbotron col-md-4 offset-lg-4" style={{ color: '#FC452C' }}><br></br>
                <div className='card' style={{ backgroundColor: '#C2C0BE' }}>
                    <form>
                        <h2 className="text-center">Register Page</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">User Name</label>
                            <input type="text" name="name" className="form-control" id="name" aria-describedby="name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="password"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" name='checkbox' id="checkbox"/>
                            <label className="form-check-label" htmlFor="checkbox">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button><br></br>
                        <h4>Forget My Password <Link to="/login">Login Here</Link></h4>
                    </form>
                  </div>
              </div>
              
          </div>
        </div>
      </div>
    )
  }
}
