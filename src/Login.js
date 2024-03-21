
import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate } from "react-router-dom";
import {auth} from './Firebase';




function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  


  const signIn = e => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth => {
      
      navigate.push('./')
    })
    .catch(error => alert(error.message))
    //console.log(email, password))
   }


  const register = e => {
    e.preventDefault();
    //console.log(email, password)
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) => {
     //create a new user
     
      if(auth){
        navigate.push('./')
      }
    })
    .catch(error => alert(error.message));
  }


  return (
 
    <div className='login'>
        <Link to = "/" >
            <img
             className="login_logo "
             src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png"
             alt="Amazon Logo" 
             />
        </Link>

        <div className="login_content">
         <h2>Sign in</h2>
         <form>
             <h5>Email or mobile phone number</h5>
             <input type="email" 
              value={email} onChange={e => setEmail(e.target.value)}
             
             />

             <h5>Password</h5>
             <input type="password" 
             value={password} onChange={e => setPassword(e.target.value)}
             />
              <br/>
             <button className='signIn_button' type="submit" onClick={signIn}>Sign In</button>
         </form>

         <p>By continuing, you agree to Amazon's Conditions of<br /> Use and Privacy Notice.</p>
         <p>Need help?</p><hr />
         <p>Buying for work?</p> 
         <p>Shop on Amazon Business</p>
         
        </div>

        <div className='account_creation'>
         <div id='newTo_amazon'> <p>-----------New to Amazon?-----------</p> </div>
        <button className='newAccount_button' onClick={register}>Create Your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login;
