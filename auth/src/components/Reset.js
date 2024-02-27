import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Reset extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron row"><br></br>
              <div className="jumbotron col-md-4 offset-lg-4"><br></br>
                <div className='card' style={{ backgroundColor: '#C2C0BE' }}>
                    <form>
                        <h2 className="text-center">Register Page</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Pincode</label>
                            <input type="text" name="pincode" className="form-control" id="pincode" aria-describedby="pincode"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="password"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">New Password</label>
                            <input type="password" name="newmpassword" className="form-control" id="newmpassword"/>
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
