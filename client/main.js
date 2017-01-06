import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import TEMP from '../imports/temp.js'
import './main.html';

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './HelloWorld.js';

Meteor.startup(() => {
  //render(<App />, document.getElementById('app'));
 //render(<App></App>,document.getElementById('example'));
  
});















Session.set('markup', TEMP.findOne({}));


Template.template.helpers({
	markup() {
		if(TEMP.find({}, { sort: {'date':-1}, limit:1}).fetch()[0]){
			var markup = TEMP.find({},{ sort: { 'date':-1 }, limit:1}).fetch()[0];
			return markup.html.replace("&nbsp;","")
		}
	},
	styles(){
		var markup = TEMP.find({}, { sort: { 'date':-1 }, limit:1} ).fetch()[0];
		console.log(markup)
		if(markup){
			return markup.css
		}
	}
})

Template.template.onRendered(function(){})


Template.editor.events({
	'keyup #editHTML':function(event,template){
		console.log('in html');
		save();
	},
	'keyup #editCSS':function(event,template){
		console.log('in edit css');
		save();
	},
	'focus #editCSS':function(){
		$('#editor #editCSS').html($('body style').text().trim().replace(/\s/g,''))
	},
	'focus #editHTML':function(){
		$('#editor #editHTML').text($('#template').html().trim().replace("&nbsp;",""))
	}
})



Template.js.onRendered(function(){
	console.log('js too');
})


var t; 
function save(){
	var isEditable = true; 
	if(isEditable){
		console.log(t);
		if(t){
			clearTimeout(t);
			t = null; 
		}
		t = setTimeout(function(){
			Session.set('markup', $('#editor #editHTML').text().replace("&nbsp;",""))
			Session.set('styles', $('#editor #editCSS').text().replace(/\s/g,''))			
			Meteor.call('saveIt', [ $('#editor #editHTML').text().replace("&nbsp;",""),   $('#editor #editCSS').text().replace(/\s/g,'')])
		},3000)

	}
}


