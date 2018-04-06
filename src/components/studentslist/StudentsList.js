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

  studentColours = () => {
    const batchId =  this.props.match.params.batchId
    const { batches } = this.props

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

    return {
      greenStudents,
      yellowStudents,
      redStudents
    }

  }

percentageCalc = () => {
    const colour = this.studentColours()
    const batchId =  this.props.match.params.batchId
    const { batches } = this.props
    const students = batches.filter(batch => batch.id === Number(batchId))[0].student

    //calculate percentage of green, yellow and red Students
    let percentageGreen = (colour.greenStudents.length * 100)/students.length
    let percentageYellow = (colour.yellowStudents.length * 100)/students.length
    let percentageRed = (colour.redStudents.length * 100)/students.length

    return {
      percentageGreen,
      percentageYellow,
      percentageRed
    }
  }

  askQuestion = () => {

    const colour = this.studentColours()

    //get random number between 0 and 1
    const random = Math.random()
    //53% chance for red students to get picked
    console.log('hello');
    if (random < 0.53) {
      let student = colour.redStudents[Math.floor(Math.random() * colour.redStudents.length)]
      window.alert(student.firstName)
    }
    //check the next 28% -> total 81% percent
    else if (random < 0.81) {
      let student = colour.yellowStudents[Math.floor(Math.random() * colour.yellowStudents.length)]
      window.alert(student.firstName)
    }
    else {
      let student = colour.greenStudents[Math.floor(Math.random() * colour.greenStudents.length)]
      window.alert(student.firstName)
    }
  }

  render() {

    const { authenticated, history, batches } = this.props
    const batchId =  this.props.match.params.batchId
    const students = batches.filter(batch => batch.id === Number(batchId))[0].student

    if(!authenticated) return (
      <Redirect to="/" />
    )

    const percentages = this.percentageCalc()

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
          <button onClick={ this.askQuestion }>
            Ask a question
          </button>
          <div>
            <div className="green">
              { percentages.percentageGreen }%
            </div>
            <div className="yellow">
              { percentages.percentageYellow }%
            </div>
            <div className="red">
              { percentages.percentageRed }%
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
