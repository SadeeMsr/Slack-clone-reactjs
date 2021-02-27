import React from 'react'
import { auth, provider } from '../firebase'


function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser);
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <div id="login-wrap">
            <div id="login-content">
                <img src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt=""/>
                <h1>Sign in Slack</h1>
                <div onClick={signIn} id="signIn-button"> 
                    Sign In with Google
                </div>
            </div>
        </div>
    )
}

export default Login
