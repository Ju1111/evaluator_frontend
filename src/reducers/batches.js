import { GET_BATCHES } from '../actions/types'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
    case GET_BATCHES:
      console.log(payload);
      return payload

    default:
      return state
  }
}
