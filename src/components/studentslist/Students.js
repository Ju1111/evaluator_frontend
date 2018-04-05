import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


class Student extends PureComponent {

  handleClick = () => {
    console.log('Hellloooooooo');
    const { student, history } = this.props
    history.push(`./students/${student.id}/evaluations`)
  }

  render() {
    const { student } = this.props
    console.log(student);
    return(
      <button className="oneStudent" onClick={ this.handleClick }>
        Name:{ student }
      </button>
    )
  }

}

export default withRouter(connect(null)(Student))
