import * as request from 'superagent'
import { baseUrl } from '../constants'
import { GET_STUDENTS, STUDENT_SUCCESS, STUDENT_FAIL } from './types'

export const getStudents = (batchId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.user.jwt

  request
    .get(`${baseUrl}/batches/${batchId}/students`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch({
        type: GET_STUDENTS,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const addStudent = (batchId, data) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.user.jwt

  request
    .post(`${baseUrl}/batches/${batchId}/students`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(result => {
      dispatch({
        type: STUDENT_SUCCESS,
      })
    })
    .catch(err => {
			if (err.status === 400) {
				dispatch({
					type: STUDENT_FAIL,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
    })
}
