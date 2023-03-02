import React from 'react';
import './Sign.scss';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../firebase/firebaseconfig';

const Sign = () => {
  const createAccountWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className='sign-logo'>
        <Link to="/">
          <img className='sign-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt="" />
        </Link>
      </div>


      <div className='sign-form'>
        <h1 className='sign_h1'>Hello</h1>
        <p className='sign_p'>Sign in to eBAY or <Link to="/register">create an account</Link></p>

        <form className='form-sign'>
          <input type="name" placeholder="name"/>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password"/>
          <input type="avatar" placeholder="avatar"/>

          <p className='form_p'>Created your account with a mobile number?</p>
          <Link className='form_link' to="/signin">Sign in with mobile</Link>

          <button className='form_btn'>Continue</button>
        </form>

        <div className='google-border'></div>
        <button onClick={createAccountWithGoogle} className='google-btn'> <FcGoogle className='g-btn'/> Continue with Google </button>


        <div className='sign-footer'>
          {/* <input className='check-input' type="checkbox" checked/> */}
          <p>Stay signed in</p>
        </div>

      </div>
    </div>
  )
}

export default Sign;