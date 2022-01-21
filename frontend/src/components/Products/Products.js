import React from 'react'

import './Products.css'

import Paper from '../Paper/Paper.js'
import EndpointContainer from '../EndpointContainer/EndpointContainer.js'

export default function Products(props){

  const accountId = props.accountId
  const country = props.country

  return(<React.Fragment>
      <Paper className='products-container'>

      <h4 className='products-header'>Products</h4>

      <EndpointContainer product='connect' method='get' name='Account Information' apiCall={`/accounts/${accountId}`} country={country} schema='/accounts/{id}' description='This resource represents the account details with the financial institution.'/>

      <EndpointContainer product='connect' method='get' name='Statement' apiCall={`/accounts/${accountId}/statement`} country={country} schema='/accounts/{id}/statement' description='This resource represents the bank statement of the connected financial account. You can query 1-12 months bank statement in one single call.'/>

      <EndpointContainer product='connect' method='get' name='Transactions' apiCall={`/accounts/${accountId}/transactions`} country={country} schema='/accounts/{id}/transactions' description='This resource represents the known transactions on the account.'/>

      <EndpointContainer product='connect' method='get' name='Income' apiCall={`/accounts/${accountId}/income`} country={country} schema='/accounts/{id}/income' description='This resource will return income information on the account. Currently in Beta.'/>

      <EndpointContainer product='connect' method='get' name='Identity' apiCall={`/accounts/${accountId}/identity`} country={country} schema='/accounts/{id}/identity' description='This resource provides a high level overview of an account identity data.'/>

    </Paper>

    <Paper className='products-container'>

      <h4 className='products-header'>Miscellaneous</h4>

      <EndpointContainer product='misc' method='post' name='Unlink Account' apiCall={`/accounts/${accountId}/unlink`} country={country} schema='/accounts/{id}/unlink' description='This enables you to provide your customers with the option to unlink their financial account(s).'/>

      <EndpointContainer product='user' method='get' name='Wallet' apiCall={`/users/stats/wallet`} country={country} schema='/users/stats/wallet' description='This resource allows you to check the available balance in your Mono wallet.'/>

      <EndpointContainer product='misc' method='get' name='Institutions' apiCall={`/coverage`} country={country} schema='/coverage' description='This resource returns the available institutions on Mono.'/>

    </Paper>

  </React.Fragment>)

}
