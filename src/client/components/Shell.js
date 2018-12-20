import React, { useState } from 'react'
import { Map } from 'immutable'
import Economy from './Economy'
import { handleEvent } from '../core/economy'

const Shell = () => {
  const [economy, updateEconomy] = useState(Map())

  const update = (event) => updateEconomy(handleEvent(economy, event))

  return (<Economy economy={economy} update={update} />)
}

export default Shell
