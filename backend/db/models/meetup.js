const Promise = require('bluebird')
const Sequelize = require('sequelize');
const db = require('../db')



const Meetup = db.define('Meetup', {
	firstName: {
		type: Sequelize.STRING,
		allowNull:false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull:false
	},
	street: {
		type: Sequelize.STRING,
		allowNull:false
	},
    city: {
		type: Sequelize.STRING,
		allowNull:false
	},
    state: {
		type: Sequelize.STRING,
		allowNull:false
	},
	lat:{
		type: Sequelize.DECIMAL,
		allowNull:false
	},
	lng:{
		type: Sequelize.DECIMAL,
		allowNull:false
	},
    description: {
		type: Sequelize.STRING,
		allowNull:false
	},
	date: {
		type: Sequelize.DATE,
		allowNull:false
	},
	time: {
		type: Sequelize.TIME,
		allowNull:false
	},
	language: {
		type: Sequelize.STRING,
		// allowNull:false
	},
	numberGoing: {
		type: Sequelize.INTEGER,
	
	}
  // userID: {
	// 	type: Sequelize.INTEGER,
	// 	allowNull:false
	// },
});


Meetup.prototype.getAdress = function(){
	return this.street + ' ' + this.city + ' ' + this.state
}

Meetup.prototype.getName = function(){
	return this.firstName + ' ' + this.lastName
}

module.exports =  Meetup
