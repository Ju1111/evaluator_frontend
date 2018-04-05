import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


class Batch extends PureComponent {

  handleClick = () => {
    console.log('Hellloooooooo');
    const { student, history } = this.props
    history.push(`./students/${student.id}/evaluations`)
  }

  render() {
    const { student } = this.props
    return(
      <button className="oneStudent" onClick={this.handleClick}>
        Batch #{ student.lastName }
      </button>
    )
  }

}

export default withRouter(connect(null)(Batch))
