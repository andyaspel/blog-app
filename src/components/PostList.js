import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import User from './User';

class PostList extends Component {
	componentDidMount () {
		this.props.fetchPostsAndUsers();
	}
	renderList () {
		return this.props.posts.map((post) => {
			return (
				<div className="header card" key={post.id}>
					<h4>{post.title}</h4>
					<br />
					<p className="card-content">{post.body}</p>
					<div>
						<User userId={post.userId}/>
					</div>
				</div>
			);
		});
	}
	render () {
		console.log(this.props.posts);

		return (
			<div className="header">
				<h2>Post List</h2>
				<div className="card">{this.renderList()}</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers: fetchPostsAndUsers })(PostList);
