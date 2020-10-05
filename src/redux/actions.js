import { createAction } from 'redux-actions'

import { types } from './types'

const actions = {
  addTask: createAction(types.TODO_ADD_TASK),
  addArea: createAction(types.TODO_ADD_AREA),
  addTemp: createAction(types.TODO_ADD_TEMP),
}

export { actions }