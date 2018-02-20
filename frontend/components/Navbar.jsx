import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';


export default class Navbar extends Component {
    render () {
      return (
        <nav className="red">
            <div >
            <a href="/" className="brand-logo">Codeup</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/addmeetup">Create Meetup</NavLink></li>
                <li><a href="/addmeetup">Your Meetups</a></li>
                <li><a href="/addmeetup">Recommended</a></li>
            </ul>
            </div>
         </nav>
      );
    }
  }