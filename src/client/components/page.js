import React from 'react';

import { getState } from 'redux';

import LogIn  from '../actions/login.actions.js'
import LogOut  from '../actions/logout.actions.js'

import User from './user';

class Page extends React.Component {
	dispatchAction(input){
		if(input == 'LOG_IN'){
			this.props.store.dispatch(LogIn())
		} else if(input == 'LOG_OUT'){
			this.props.store.dispatch(LogOut())
		}
	}
	
	componentWillMount(){
		this.props.store.subscribe(this.forceUpdate.bind(this));
	}
	
	render(){
		const stateProps = this.props.store.getState();
		console.log('stateProps');
		console.log(stateProps);
		const Items = (
			<User 
				key = { stateProps.user }
        stateProps = { stateProps }
        dispatchAction = {this.dispatchAction.bind(this)}
			/>
		)
		return(
			<div>
				{Items}
			</div>
		)
	}
}

export default Page;