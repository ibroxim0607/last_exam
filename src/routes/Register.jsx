import React, { useState } from 'react';
import './Register.scss';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import instance from '../api/instance';
import { auth, provider } from '../firebase/firebaseconfig';

const Register = () => {
  const createAccountWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  })

  const createUserWithEmail = (e) => {
    e.preventDefault();
    instance.post("/users", formData)
      .then(response => {
        if(response.data.email){
          //send to store
          dispatch(
            {
              email: response.data.email,
              type: "CREATE_USER"
            }
          )
          history.push("/");
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div className='register-logo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt="" />
      </div>


      <div className='register-title'>Create an account</div>

      <div className='register'>
        <form onSubmit={createUserWithEmail} className='register-left'>
          <div className='left-1'>
            <input className='left-1-1' onChange={e => setFormData({...formData, name: e.target.value})} type="text"  placeholder='First name'/>
            <input className='left-1-2' onChange={e => setFormData({...formData, email: e.target.value})} type="email"  placeholder='Email'/>
          </div>
          <div className='left-2'>
            <input className='left-2-1' onChange={e => setFormData({...formData, password: e.target.value})} type="password" placeholder='Password'/>
            <input className='left-2-2' onChange={e => setFormData({...formData, avatar: e.target.value})} type="url" placeholder='Avatar'/>
          </div>
          <div className='left-3'>
            <p>By Creating an account, you agree to our User Agreement  and acknowledge reading our User Privacy Notice .</p>
          </div>
          <div className='left-4'>
            <button type='submit' className='left-btn'>Create an account</button>
          </div>
        </form>


        <div className='register-right'>
          <div className='right-1'>
            <button onClick={createAccountWithGoogle} className='continue-with-google'><FcGoogle/> Continue with Google</button>
          </div>
        </div>
      </div>

      <footer>
        <div className='footer'>
          <p>Copyright © 1995-2023 eBay Inc.  All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices and AdChoice</p>
        </div>
      </footer>
    </div>
  )
}

export default Register