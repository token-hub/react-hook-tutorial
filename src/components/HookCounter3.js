import React, {useState} from 'react';

const HookCounter3 = () => {

	const [name, setName] = useState({firstname: '', lastname: ''});

	return(
		<div>
			<input type="text" name="firstname" value={name.firstname} onChange={ e => setName({...name, firstname: e.target.value }) } id=""/>
			<input type="text" name="lastname" value={name.lastname} onChange={ e => setName({...name, lastname: e.target.value }) } id=""/>
			<h2>Your firstname is: {name.firstname}</h2>
			<h2>Your lastname is: {name.lastname}</h2>
		</div>
	)
}

export default HookCounter3


// import React from 'react';

// class HookCounter3 extends React.Component {

// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			firstname: '',
// 			lastname: ''
// 		}
// 	}

// 	changeFirstnameHandler = e => {
// 		this.setState({
// 			firstname: e.target.value
// 		})
// 	}

// 	changeLastnameHandler = e => {
// 		this.setState({
// 			lastname: e.target.value
// 		})
// 	}

// 	render() {
// 		return(
// 			<div>
// 				<input type="text" name="firstname" onChange={this.changeFirstnameHandler} id=""/>
// 				<input type="text" name="lastname" onChange={this.changeLastnameHandler} id=""/>
// 				<h2>Your firstname is: {this.state.firstname}</h2>
// 				<h2>Your lastname is: {this.state.lastname}</h2>
// 			</div>
// 		)
// 	}
// }

// export default HookCounter3