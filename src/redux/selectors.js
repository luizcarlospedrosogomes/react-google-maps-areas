import { createSelector } from 'reselect'

const getTasks = createSelector(
  state => state.todoReducers.tasks,
  tasks => tasks,
)

const getAreas = createSelector(
  state => state.todoReducers.areas,
  areas => areas,
)

const selectors = {
  getTasks,
  getAreas,
}

export { selectors }