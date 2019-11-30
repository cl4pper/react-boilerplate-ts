import { FETCHING_API } from '@utils'

// ACTIONS
import * as githubActions from './actions'

const githubRequest = () => {
  return function (dispatch) {
    dispatch(githubActions.loadCommits())
    FETCHING_API()
      .then(response => {
        dispatch(githubActions.loadCommitsSuccess(response.data))
      })
      .catch(response => {
        dispatch(githubActions.loadCommitsFailure(response.error))
      })
  }
}

export {
  githubRequest
}
