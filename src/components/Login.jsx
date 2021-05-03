import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { auth } from '../firebase';
import  "./css/login.css";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email.trim(), password).then(auth => {
            history.push("/home");
        })
        .catch(error => alert(error.message))


    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email.trim(),password).then((auth) =>{
            if (auth){
                history.push("/home")
            }

        })
        .catch(error => alert(error.message))


    }


    return (
        <div className="login">
                <img
                    className="login__logo"
                    alt=""
                    src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
                />
           
            <div className='login__container'>
                <h1>Login</h1>

                <form>
                    <h5>E-mail</h5>

                    <input type='text' value={email} onChange={event => setEmail(event.target.value)} />

                    <h5>Password</h5>

                    <input type='password' value={password} onChange={event => setPassword(event.target.value)}
                     />

                    <button 
                        onClick={signIn}
                        className="logbutton" type='submit'>Login
                    </button>
                </form>



                <button 
                    onClick={register}
                    className="login__registerButton"> Create your Account</button>
            </div>
        </div>
    )
}

export default Login

 