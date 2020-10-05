import { createSelector } from 'reselect'

const getTasks = createSelector(
  state => state.todoReducers.tasks,
  tasks => tasks,
)

const getAreas = createSelector(
  state => state.todoReducers.areas,
  areas => areas,
)

const getTemp = createSelector(
  state => state.todoReducers.temp,
  temp => temp,
)
const selectors = {
  getTasks,
  getAreas,
  getTemp,
}

export { selectors }