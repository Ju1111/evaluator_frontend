import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/teachers'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'
import './LoginPage.css'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
		//take this out before the final commit
		// console.log(data)
	}

	render() {
		console.log(this.props.user);
		if (this.props.user) return (
			<Redirect to="/batches" />
		)

		return (
			<div className="Login">
				<h1>Welcome to the EVALUATOR</h1>
				<h1>Please log in to start evaluating</h1>

				<LoginForm onSubmit={ this.handleSubmit } />

        { this.props.error && <span style={ { color:'red' } }>{ this.props.error }</span> }

			</div>
		)
	}
}

const mapStateToProps = function (state) {
	console.log(state.user);
	return {
		user: state.user,
    error: state.login.error
	}
}

export default connect(mapStateToProps, { login })(LoginPage)
