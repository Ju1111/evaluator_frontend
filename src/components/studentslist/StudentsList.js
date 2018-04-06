import React, { PureComponent } from 'react'
import Student from './Students'
import { getStudents } from '../../actions/students'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import './StudentsList.css'

class StudentsList extends PureComponent {

  renderStudent = (student) => {
    return (
      <Student
        student={ student }
      />
    )
  }

  render() {

    const { authenticated, history, batches } = this.props

    const batchId =  this.props.match.params.batchId

    let students
    let evaluationColour

    let greenStudents = []
    let yellowStudents = []
    let redStudents = []

    for (var i = 0; i < batches.length; i++) {
      if(batches[i].id === Number(batchId)) {
        students = batches[i].student
      }
    }

    for (var e = 0; e < students.length; e++) {
      evaluationColour = students[e].evaluation[0].colour
      if (evaluationColour === 'green') {
        greenStudents.push(students[e])
      } else if (evaluationColour === 'yellow') {
        yellowStudents.push(students[e])
      } else {
        redStudents.push(students[e])
      }
    }

    //calculate percentage of green, yellow and red Students

    let percentageGreen = (greenStudents.length * 100)/students.length
    let percentageYellow = (yellowStudents.length * 100)/students.length
    let percentageRed = (redStudents.length * 100)/students.length

    if(!authenticated) return (
      <Redirect to="/" />
    )

    if(!students) {
      return (
        <div className="students">
          <button className="back" onClick={ () => history.push('/batches') }>
            Back to batches
          </button>
          <button className="logout" onClick={ () => history.push('/logout') }>
            logout
          </button>
          <button onClick={ () => history.push('./newstudent')}>
            Add a student
          </button>
          <h3>This batch has no students yet. Feeling like adding some?</h3>
        </div>
      )
    }
    if(students) {
      return (
        <div className="students">
          <button className="back" onClick={ () => history.push('/batches') }>
            Back to batches
          </button>
          <button className="logout" onClick={ () => history.push('/logout') }>
            logout
          </button>
          <button onClick={ () => history.push('./newstudent')}>
            Add a student
          </button>
          <button onClick={ () => history.push('./question')}>
            Ask a question
          </button>
          <div>
            <div className="green">
              { percentageGreen }%
            </div>
            <div className="yellow">
              { percentageYellow }%
            </div>
            <div className="red">
              { percentageRed }%
            </div>
          </div>
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
