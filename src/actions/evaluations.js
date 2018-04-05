import * as request from 'superagent'
import { baseUrl } from '../constants'
import { GET_EVALUATIONS, ADD_EVALUATION_SUCCESS, ADD_EVALUATION_FAIL } from './types'

export const getEvaluations = (batchId, studentId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.user.jwt

  request
    .get(`${baseUrl}/batches/${batchId}/students/${studentId}/evaluations`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch({
        type: GET_EVALUATIONS,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const addEvaluation = (batchId, studentId, data) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.user.jwt

  request
    .post(`${baseUrl}/batches/${batchId}/students/${studentId}/evaluations`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(result => {
      dispatch({
        type: ADD_EVALUATION_SUCCESS,
      })
    })
    .catch(err => {
			if (err.status === 400) {
				dispatch({
					type: ADD_EVALUATION_FAIL,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
    })
}
