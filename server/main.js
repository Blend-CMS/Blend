import { Meteor } from 'meteor/meteor';
import TEMP from '../imports/temp.js';


Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	'saveIt':function(template){
		console.log('save it');
		var temp ={
			'html':template[0],
			'css':template[1],
			'date':Date.now()
		}
		TEMP.insert(temp);
	}

})
