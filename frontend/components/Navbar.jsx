import React, {Component} from 'react'


export default class Navbar extends Component {
    render () {
      return (
        <nav className="red">
            <div >
            <a href="/" className="brand-logo">Codeup</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/addmeetup">Create Meetup</a></li>
                <li><a href="/addmeetup">Your Meetups</a></li>
                <li><a href="/addmeetup">Recommended</a></li>
            </ul>
            </div>
         </nav>
      );
    }
  }