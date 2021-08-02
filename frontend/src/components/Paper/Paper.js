import React from 'react'
import './Paper.css'

export default function Paper(props){

  return(<div className={`paper-container ${props.className}`}>

    {props.children}

  </div>)

}
