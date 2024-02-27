import React, { Component } from 'react'
export default class Forgot extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron row"><br></br>
              <div className="jumbotron col-md-4 offset-lg-4" style={{ color: '#FC452C' }}><br></br>
                <div className='card' style={{ backgroundColor: '#EAEAC5' }}>
                      <form>
                          <h2 className="text-center">Forgot Page</h2>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                          <button type="submit" className="btn btn-primary">Submit</button><br></br>
                      </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
