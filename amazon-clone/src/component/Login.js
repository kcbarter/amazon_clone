import React, { useState } from 'react';
import '../styling/login.css';
import { Link }  from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
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
                    <input type='text'/>

                    <h5>Password</h5>
                    <input type='password'/>

                    <button className='login_signButton'>Sign In</button>
                </form>
                <p>
                    By signing in you agree to AMAZON FAKE Clone Conditions
                    of Use & Sale. Please see out Privacy Notice, our Cookies 
                    Notice and our Internal-Based Ads
                </p>
                <button className='login_registerButton'>Create Account</button>
            </div>
        </div>
    )
}

export default Login;
