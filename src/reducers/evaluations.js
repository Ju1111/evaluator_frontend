import { GET_EVALUATIONS } from '../actions/types'

export default function (state = {}, {type, payload}) {
	switch(type) {

    case GET_EVALUATIONS:
      console.log(payload);
      return payload

		default:
      return state
	}
}
