import React from 'react'
import './ConnectButton.css'

export default function ConnectButton(props){

  return(
    <div onClick={() => {if(props.onClick){props.onClick()}}} className='connect-button'><div className='connect-button-image-container'><img src='/mono-icon.png' className='connect-button-image' /></div><div className='connect-button-text'>Link account with Mono</div></div>
  )

}
