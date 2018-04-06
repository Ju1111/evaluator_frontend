import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import './Students.css'

class Student extends PureComponent {

  handleClick = () => {
    const { student, history } = this.props
    history.push(`./students/${student.id}/evaluations`)
  }

  render() {
    const { student } = this.props
    // console.log(student);
    return(
      <div className="oneStudent" onClick={ this.handleClick }>
        <img className="studentImage" alt="student" src={ student.picture } />
        <div className="studentName">
          { student.firstName } { student.lastName }
        </div>
      </div>
    )
  }

}

export default withRouter(connect(null)(Student))
