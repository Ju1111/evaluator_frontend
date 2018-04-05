import { GET_STUDENTS } from '../actions/types'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
    case GET_STUDENTS:
      console.log(payload);
      return payload

    default:
      return state
  }
}
