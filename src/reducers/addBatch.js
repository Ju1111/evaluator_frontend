import {
	BATCH_SUCCESS, BATCH_FAILED
} from '../actions/types'

export default function (state = {}, {type, payload}) {
	switch(type) {
    case BATCH_SUCCESS:
      return {
        success: true
      }

    case BATCH_FAILED:
      return {
        error: payload
      }

		default:
      return state
	}
}
