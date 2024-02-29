import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    let name;
    let email;
    if(this.props.user){
      name=this.props.user.name;
      email=this.props.user.email;
    }
    return (
      <div>
        <div className="container">
          <div className="jumbotron row"><br></br>
              <div className="jumbotron col-md-4 offset-lg-4"><br></br>
                  <div className='card' style={{ backgroundColor: '#C2C0BE' }}>
                   <h3>My Profile</h3>
                   <ul className='list'>
                    <li className='list-item'>User Details</li>
                    <li className='list-item'>Name: {name}</li>
                    <li className='list-item'>Email: {email}</li>
                   </ul>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}