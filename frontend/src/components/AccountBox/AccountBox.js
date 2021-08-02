import React from 'react'
import './AccountBox.css'

import Paper from '../Paper/Paper.js'

export default function AccountBox(props){

  return(<Paper>

    <p className='account-box-row'>
      <span className='account-box-property'>token</span>
      <span className='account-box-value'>{props.token}</span>
    </p>

    <p className='account-box-row'>
      <span className='account-box-property'>id</span>
      <span className='account-box-value'>{props.accountId}</span>
    </p>

    </Paper>)

}
