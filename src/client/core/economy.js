import { Map, fromJS } from 'immutable'
import shortid from 'shortid'
import faker from 'faker'


export const paths = {
  people: () => ['people'],
  person: (id) => ['people', id],
}

const eventTypes = {
  addPerson: 'addPerson',
}

export const events = {
  [eventTypes.addPerson]: () => ({
    type: eventTypes.addPerson,
    name: faker.name.findName(),
  })
}

const handleAddPerson = (current, { name }) => {
  const id = shortid.generate()
  return current.setIn(paths.person(id), fromJS({ name, id }))
}

const handlerMap = {
  [eventTypes.addPerson]: handleAddPerson
}

export const handleEvent = (state = Map(), event) => {
  const handler = handlerMap[event.type]
  if (handler) {
    return handler(state, event)
  }
  console.warn('unknown event type', event)
  return state
}


