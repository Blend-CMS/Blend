/*
import React from 'react';

console.log(React)

 var people = [
	{
		"name":"niko",
		"avatar":"0.jpg",
		"id":0
	},
	{
		"name":"niko1",
		"avatar":"1.jpg",
		"id":1
	},
	{
		"name":"niko23",
		"avatar":"2.jpg",
		"id":2
	}
	

];

Card = React.createClass( {

	render(){
				console.log({this})
			Meteor.call('saveIt',['react', Math.random()])
		return(
			<div>
			
				<h2>{this.props.name}</h2>
				
				<img src={this.props.avatar} alt=''/>
			</div>		
		)
	
	}
} )


App = React.createClass({

	random(){
		return console.log(Math.random())
	},

	getInitialState(){
		return {

			people:people
		}
	},

	render: function(){
				console.log({this})
		
		return(
				
			<div>
				{this.state.people.map(function(person){
									       
									       console.log(person)
								 return ( <Card name={person.name} avatar={person.avatar}></Card>)
									       	
				})}
			</div>	
		)
	}
})	
*/

