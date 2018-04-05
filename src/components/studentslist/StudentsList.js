import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import Student from './Student'
import { getStudents } from '../../actions/students'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import './StudentsList.css'

class StudentsList extends PureComponent {

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getStudents()
    }
  }

  renderBatch = (student) => {
    return (
      <Student
        student={ student }
      />
    )
  }

  render() {

    const { authenticated, history, students } = this.props

    if(!authenticated) return (
      <Redirect to="/" />
    )

    console.log(students)
    return (
      <div className="students">
        <header className="studentsHeader">
        </header>
        <button className="logout" onClick={ () => history.push('./logout') }>
          logout
        </button>
        <h1>Select a student you want to evaluate</h1>
        <div className="student">
          { students.map(student => this.renderStudent(student)) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.user !== null,
  user: state.user === null ? null:state.user,
  students: state.batches.student === null ? null:Object.values(state.batches.student).sort((a, b) => b.lastName - a.lastName)
})

export default withRouter(
  connect(mapStateToProps, { getStudents })(StudentsList)
)
