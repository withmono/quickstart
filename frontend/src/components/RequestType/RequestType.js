import React from 'react'
import './RequestType.css'

export default function RequestType(props){

  const method = props.method

  if(method == 'post'){
    return(<span className='request-type post-request'>POST</span>)
  }else if(method == 'get'){
    return(<span className='request-type get-request'>GET</span>)
  }else if(method == 'put'){
    return(<span className='request-type put-request'>PUT</span>)
  }else if(method == 'delete'){
    return(<span className='request-type delete-request'>DELETE</span>)
  }

}
