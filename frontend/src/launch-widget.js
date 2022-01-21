import React, { useCallback } from 'react'
import './App.css'

import ConnectButton from './components/ConnectButton/ConnectButton.js'
import Warning from './components/Warning/Warning.js'
import AccountBox from './components/AccountBox/AccountBox.js'
import Products from './components/Products/Products.js'

import Connect from '@mono.co/connect.js'
import { useNavigate, useParams } from 'react-router-dom'

const axios = require('axios').default
const serviceCountries = ['ng', 'ke', 'za', 'gh'];

export default function LaunchWidget() {

  const [token, setToken] = React.useState('')
  const [accountId, setAccountId] = React.useState('')
  const [serverOn, setServerOn] = React.useState(false)
  let navigate = useNavigate();
  let {country} = useParams()

  const startPolling = useCallback(() => {
    console.log("the result", serverOn)
    
    if(!serverOn){
      axios.get(`${process.env.REACT_APP_API_HOST}/api/ping`)
      .then((result) => {
        setServerOn(true);
      })
      .catch((error) => {
        setServerOn(false)
        setAccountId('')
        setTimeout(startPolling, 2500)
      })
    }
  }, [serverOn])

  React.useEffect(() => {

    startPolling()

  }, [])

  function poll() {
    startPolling()
  }

  function getPublicKey() {
    const available = serviceCountries.includes(country.toLowerCase());
    if(available) {
      return keys[country];
    }

    navigate('/ng')
  }

  // setup mono connect widget to link to bank accounts
  const connect = new Connect({
    key: getPublicKey(),
    onSuccess: ({code}) => {
      console.log("code", code)
      // now to backend
      setToken(code)
      axios.get(`${process.env.REACT_APP_API_HOST}/api/exchangetoken?token=${code}&country=${country}`)
      .then((result) => {
        console.log(result.data.id)
        setAccountId(result.data.id)

      })
      .catch((error) => {
        console.log(error)
      })
    },
    onLoad: () => console.log("widget loaded successfully"),
    onClose: () => console.log("widget has been closed")
  });

  connect.setup();

  if(accountId != ''){

    return(
      <div className="App">

        <h3 className='title'>Mono Quickstart</h3>

        <h4 className='subtitle'>Congrats! You've linked your account to Mono.</h4>

        <AccountBox token={token} accountId={accountId} />

        <p className='description description-extra-margin'>Now that you have an account id, you can make all of the following requests:</p>

        <Products accountId={accountId} country={country} />

      </div>
    )

  }else{
    return (
      <div className="App">

        <h3 className='title'>Mono Quickstart</h3>
        <h4 className='subtitle'>A sample end-to-end integration with Mono</h4>

        <p className='description'>The Mono Connect flow begins when your user wants to connect their bank account to your app. Simulate this by clicking the button below to launch Connect - the client-side component that your users will interact with in order to link their accounts to Mono and allow you to access their accounts via the Mono Connect API.</p>

          {serverOn == true ? <ConnectButton onClick={() => {connect.open()}} /> : null }
          {serverOn == false ? <Warning /> : null}

      </div>
    )
  }

}

const keys = {
  ng: process.env.REACT_APP_MONO_PUBLIC,
  ke: process.env.REACT_APP_MONO_PUBLIC_KE,
  za: process.env.REACT_APP_MONO_PUBLIC_ZA,
  gh: process.env.REACT_APP_MONO_PUBLIC_GH
};
