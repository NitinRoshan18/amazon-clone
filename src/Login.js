import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  const signIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

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
  );
}

export default Login;
