import { Map, fromJS, List } from 'immutable'
import shortid from 'shortid'
import faker from 'faker'


export const paths = {
  people: () => ['people'],
  person: (id) => ['people', id],
  log: () => ['log'],
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

const handleAddPerson = (current, event) => {
  const id = shortid.generate()
  const log = current.getIn(paths.log(), List())
  return current.setIn(paths.person(id), fromJS({ name: event.name, id })).setIn(paths.log(), log.push(fromJS(event)))
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


