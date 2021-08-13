import React from 'react'
import './EndpointContainer.css'
import RequestType from '../RequestType/RequestType.js'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl, github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const axios = require('axios').default

export default function EndpointContainer(props){

  const method = props.method
  const name = props.name
  const schema = props.schema
  const description = props.description
  const apiCall = props.apiCall
  const product = props.product

  const [loading, setLoading] = React.useState(false)
  const [json, setJson] = React.useState('')

  const sendRequest = () => {

    var request;

    const url = `${process.env.REACT_APP_API_HOST}/api${apiCall}`

    if(method == 'get'){
      request = axios.get(url)
    }else if(method == 'post'){
      request = axios.post(url)
    }else if(method == 'put'){
      request = axios.put(url)
    }else if(method == 'delete'){
      request = axios.delete(url)
    }

    setLoading(true)

    request.then((result) => {
      console.log(result.data)
      setJson(result.data)
    })
    .catch((error) => {
      console.log(error)
      if(error.response && error.response.data)
        setJson(error.response.data)

    })
    .finally(() => {
      setLoading(false)
    })


  }

  const resetData = () => {
    setJson('')
  }

  return(<React.Fragment>
    <div className='endpoint-container'>
      <RequestType method={method} />

      <div className='endpoint-contents'>
        <div className='endpoint-header'>
          <span className='endpoint-name'>{name}</span>
          <span className='endpoint-schema'>{schema}</span>
        </div>
        <div className='endpoint-description'>{description}</div>
      </div>
      <div className='endpoint-buttons'>
        <div onClick={sendRequest} className='endpoint-button'>{loading ? 'Loading...' : 'Send request'}</div>
        <div onClick={resetData} className='endpoint-reset'>Reset</div>
      </div>
    </div>
    {json != '' ?
      <div className='endpoint-container-json'>
        <SyntaxHighlighter language="json" style={github} showLineNumbers={true} >
          {JSON.stringify(json, null, 1)}
        </SyntaxHighlighter>
      </div>
    : null}


  </React.Fragment>)

}
