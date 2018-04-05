import * as request from 'superagent'
import { baseUrl } from '../constants'
import { GET_BATCHES, BATCH_SUCCESS, BATCH_FAILED } from './types'

export const getBatches = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.user.jwt

  request
    .get(`${baseUrl}/batches`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch({
        type: GET_BATCHES,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const addBatch = (data) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.user.jwt

  request
    .post(`${baseUrl}/batches`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(result => {
      dispatch({
        type: BATCH_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
			if (err.status === 400) {
				dispatch({
					type: BATCH_FAILED,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
    })
}
