import './Warning.css'
import React from 'react'

export default function Warning(app){


  return(<div className='warning-container'>

    <p className='warning-text'>
      Unable to connect to server: please make sure your backend server is running and that your .env file has been configured with your <span className='warning-code'>MONO_PUBLIC</span> and <span className='warning-code'>MONO_SECRET</span>.
    </p>

    </div>)

}
