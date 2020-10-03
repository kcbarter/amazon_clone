import React, { useState } from 'react';
import '../styling/login.css';
import { Link, useHistory}  from 'react-router-dom';
import { auth } from '../firebase.js';
import { db } from '../firebase.js';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_image'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                        alt='login_image'
                />
            </Link>
            <div className='login_container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type='password' value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit' className='login_signButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing in you agree to AMAZON FAKE Clone Conditions
                    of Use & Sale. Please see out Privacy Notice, our Cookies 
                    Notice and our Internal-Based Ads
                </p>
                <button className='login_registerButton' onClick={register}>Create Account</button>
            </div>
        </div>
    )
}

export default Login;
