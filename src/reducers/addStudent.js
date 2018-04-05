import {
	STUDENT_SUCCESS, STUDENT_FAIL
} from '../actions/types'

export default function (state = {}, {type, payload}) {
	switch(type) {
    case STUDENT_SUCCESS:
      return {
        success: true
      }

    case STUDENT_FAIL:
      return {
        error: payload
      }

		default:
      return state
	}
}
