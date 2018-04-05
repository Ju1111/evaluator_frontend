import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import Student from './Students'
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

  renderStudent = (student) => {
    return (
      <Student
        student={ student }
      />
    )
  }

  render() {

    console.log('hello world');
    const { authenticated, history, batches } = this.props
    // const students = this.props.params.batches.id

    console.log(this.props.match.params.batchId);

    const students =  batches[this.props.match.params.batchId].student

    if(!authenticated) return (
      <Redirect to="/" />
    )

    console.log(students)
    if(!students) return null
    if(students) {
      return (
        <div className="students">
          <header className="studentsHeader">
          </header>
          <button className="back" onClick={ () => history.push('./batches') }>
            Back to batches
          </button>
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
}

const mapStateToProps = state => ({
  authenticated: state.user !== null,
  batches: state.batches
})

export default withRouter(
  connect(mapStateToProps, { getStudents })(StudentsList)
)
