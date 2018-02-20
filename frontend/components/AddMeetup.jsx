import React, { Component } from 'react';


export default class AddMeetup extends Component {
  constructor(props){
    super(props)
    
  }

  render() {
    $(document).ready(function() {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
          });
        
          $('.timepicker').pickatime({
            default: 'now', // Set default time: 'now', '1:30AM', '16:30'
            fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
            twelvehour: true, // Use AM/PM or 24-hour format
            donetext: 'OK', // text for done-button
            cleartext: 'Clear', // text for clear-button
            canceltext: 'Cancel', // Text for cancel-button
            autoclose: false, // automatic close timepicker
            ampmclickable: true, // make AM PM clickable
            aftershow: function(){} //Function for after opening timepicker
          });
          $('select').material_select();
    });
    
    
    return (
      <div>

       <div className="row add-meetup">
        <div className="col s12">
        <h1 className="center">Add Meetup</h1>
<div className="container">
    <div className="row">
    <form className="col s12" action="/api/meetups" method="post" >
      <div className="row">
        <div className="input-field col s6">
          <input  name="firstName" placeholder="First name" id="first_name" type="text" className="validate" />
        </div>
        <div className="input-field col s6">
          <input  name="lastName" placeholder="Last name" id="last_name" type="text" className="validate" />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s4">
          <input name="street" placeholder="Street" type="text" className="validate" />
        </div>
        <div className="input-field col s4">
            <input  name="city" placeholder="city" type="text" className="validate" />
          </div>
          <div className="input-field col s4">
              <input  name="state" placeholder="state" type="text" className="validate" />
            </div>
      </div>
     
      <div className="row">
          <input placeholder="Date" type="text" className="datepicker col s6" name="date" />
          <input placeholder="Time" type="text" className="timepicker col s6" name="time" />
      </div>
      <div className="row">
          <div className="input-field col s12">
              <select multiple>
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
        <div className="row">
        <div className="input-field col s12">
          <textarea name="description" placeholder="Description" id="textarea1" className="materialize-textarea"></textarea>
        </div>
      </div>
      <button type="submit" className="waves-effect waves-light btn blue">Add</button>
     
    </form>
  </div>
  </div>
        </div>
        </div>

      </div>
      
    );
  }
}

