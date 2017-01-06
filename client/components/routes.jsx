import React from 'react' 
import {mount} from 'react-mounter'
import {MainLayout} from './layouts/MainLayout.jsx'
import App2 from '../App.jsx';

FlowRouter.route('/', {

	action(){
		mount(MainLayout, {
		
			content: (<App2 />)
				
		})
	}

});


FlowRouter.route('/sup', {

	action(){
		mount(MainLayout, {
		
			content: (<App2 />)
				
		})
	}

});
