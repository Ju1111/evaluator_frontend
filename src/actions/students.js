import * as request from 'superagent'
import { baseUrl } from '../constants'
import { GET_STUDENTS } from './types'

export const getStudents = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.user.jwt

  request
    .get(`${baseUrl}/students`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch({
        type: GET_STUDENTS,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}
