import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import { actions } from '../actions'

const tasks = handleActions({
  [actions.addTask]: (state = 0, action) => action.payload
}, [])

const areas = handleActions({
    [actions.addArea]: (state = 1, action) => [
        ...state,
        action.payload
    ]
}, [])

const temp = handleActions({
  [actions.addTemp]: (state = 0, action) => action.payload
}, [])

const reducers = combineReducers({
  tasks,
  areas,
  temp,
})

export { reducers }
