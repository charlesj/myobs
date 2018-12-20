import React from 'react'
import { Map } from 'immutable'
import injectSheet from 'react-jss'
import { events, paths } from '../core/economy'
import Flexbox from 'flexbox-react'

const Economy = ({ economy, update, classes }) => {
  const people = economy.getIn(paths.people(), Map()).toList()

  return (
    <Flexbox flexDirection='row' className={classes.main}>
      <Flexbox flexDirection='column' flexGrow={1}>
        <div>
          {people.map(p => (<div key={p.get('name')}>{p.get('name')}</div>))}
          <button onClick={() => update(events.addPerson())}>Add Person</button>
        </div>
      </Flexbox>
      <Flexbox flexDirection='column' className={classes.tools}>
        <h2>Tools</h2>
      </Flexbox>
    </Flexbox>
  )
}

const styles = {
  main: {
  },
  tools: {
    width: '300px'
  }
}

export default injectSheet(styles)(Economy)
