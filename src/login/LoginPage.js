import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { login } from '../actions/teachers'
import LoginForm from './LoginForm'
// import {Redirect} from 'react-router-dom'
import './LoginPage.css'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
		console.log(data)
	}

	render() {
		// if (this.props.currentUser) return (
		// 	<Redirect to="/batches" />
		// )

		return (
			<div className="Login">
				<h1>Please log in to start evaluating</h1>

				<LoginForm onSubmit={this.handleSubmit} />

        { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }

			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    error: state.login.error
	}
}

export default connect(mapStateToProps, { login })(LoginPage)
