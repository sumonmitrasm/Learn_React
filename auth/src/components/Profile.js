import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron row"><br></br>
              <div className="jumbotron col-md-4 offset-lg-4"><br></br>
                  <div className='card' style={{ backgroundColor: '#C2C0BE' }}>
                   <h3>My Profile</h3>
                   <ul className='list'>
                    <li className='list-item'>User Details</li>
                    <li className='list-item'>Name: Sumon Mitra</li>
                    <li className='list-item'>Email: sumonmitrasm@gmail.com</li>
                   </ul>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
