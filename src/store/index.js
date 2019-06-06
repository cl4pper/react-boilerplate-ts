import { createStore, Store, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from './ducks/rootSaga'

import { rootReducer } from './ducks/rootReducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore (
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export {
  store
}