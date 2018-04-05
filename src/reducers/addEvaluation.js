import { ADD_EVALUATION_SUCCESS, ADD_EVALUATION_FAIL } from '../actions/types'

export default function (state = {}, {type, payload}) {
	switch(type) {
    case ADD_EVALUATION_SUCCESS:
      return {
        success: true
      }

    case ADD_EVALUATION_FAIL:
      return {
        error: payload
      }

    default:
      return state
  }
}
