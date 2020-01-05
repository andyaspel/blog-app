import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {

	render () {
		const { user } = this.props;
		if (!user) {
			return null;
		}
		console.log(user.name);

		return <div className="header">{user.name}</div>;
	}
}
const mapStateToProps = (state, ownProps) => {
	// console.log(state.user);
	return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(User);
