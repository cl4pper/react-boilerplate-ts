import * as githubActions from './actions'

const INITIAL_STATE = {
  loading: true,
  error: false,
  data: [
    {
      id: 0,
      text: 'First Commit'
    }
  ]
}

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_COMMITS':
      return {
        ...state,
        loading: false,
        error: false
      }

    case 'SET_COMMITS':
    return {
      ...state,
      data: [...state.data, action.paylod]
    }

    default:
      return state
  }
}

export {
  reducer
}
