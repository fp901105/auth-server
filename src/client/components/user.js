import React from 'react';

class User extends React.Component{
	render(){
		return(
			<div className='card'>
				<h2>{this.props.stateProps.user}</h2>
				<button onClick={()=>this.props.dispatchAction("LOG_IN")}>LOGIN</button>
				<button onClick={()=>this.props.dispatchAction("LOG_OUT")}>LOGOUT</button>
			</div>
		)
	}
}

export default User;