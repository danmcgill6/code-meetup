import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class AddMeetup extends Component {
  constructor(props){
    super(props)
    
  }

  render() {
    return (
      <div>
       <Navbar></Navbar>
       <div className="container">
       <div className="row">
       <div className="col s3">
            <Sidebar />
        </div>
        <div className="col s9">
        <h1 class="center">Add Meetup</h1>
<div class="container">
    <div class="row">
    <form class="col s12" action="/addmeetup" method="post">
      <div class="row">
        <div class="input-field col s6">
          <input  name="firstName" placeholder="First name" id="first_name" type="text" class="validate" />
        </div>
        <div class="input-field col s6">
          <input  name="lastName" placeholder="Last name" id="last_name" type="text" class="validate" />
        </div>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <input name="street" placeholder="Street" type="text" class="validate" />
        </div>
        <div class="input-field col s4">
            <input  name="city" placeholder="city" type="text" class="validate" />
          </div>
          <div class="input-field col s4">
              <input  name="state" placeholder="state" type="text" class="validate" />
            </div>
      </div>
     
      <div class="row">
          <input  placeholder="Date" type="text" class="datepicker col s6" name="date" />
          <input  placeholder="Time" type="text" class="timepicker col s6" name="time" />
      </div>
      <div class="row">
          <div class="input-field col s12">
              <select multiple  >
                <option value="0" >Choose a language</option>
                <option value="1" name="language">Javascript</option>
                <option value="2">HTML</option>
                <option value="3">CSS</option>
                <option value="1">Java</option>
                <option value="2">Swift</option>
                <option value="3">Python</option>
                <option value="1">C#</option>
                <option value="2">C++</option>
                <option value="3">Ruby</option>
              </select>
             
            </div>
      </div>
        <div class="row">
        <div class="input-field col s12">
          <textarea name="description" placeholder="Description" id="textarea1" class="materialize-textarea" value="description"></textarea>
        </div>
      </div>
      <button type="submit" class="waves-effect waves-light btn blue">Add</button>
     
    </form>
  </div>
  </div>
        </div>
        </div>
      </div>
      
    );
  }
}

