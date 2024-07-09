import React from 'react'

import './index.css'

export default function Login() {
    return(
            <div className='login'>
                <h2>Successfully registered!</h2>
                <button 
                onClick={() => window.location.reload()}
                className='login-button'>
                    Back</button>
            </div>
)}
