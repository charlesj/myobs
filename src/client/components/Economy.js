import React from 'react'
import { Map } from 'immutable'
import { events, paths } from '../core/economy'

const Economy = ({ economy, update }) => {
  const people = economy.getIn(paths.people(), Map()).toList()
  console.log('events', events.addPerson())
  return (
    <div>
      {people.map(p => (<div key={p.get('name')}>{p.get('name')}</div>))}
      <button onClick={() => update(events.addPerson())}>Add Person</button>
    </div>
  )
}



export default Economy
