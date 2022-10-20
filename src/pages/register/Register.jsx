import React, { useState, useRef } from 'react'
import './register.scss'
import Netflix from '../../assets/Netflix.png'
import mobile from '../../assets/mobile.jpg'
import tv from '../../assets/tv.png'
import children from '../../assets/children.png'
import thumbnail from '../../assets/thumbnail.png'
import Accordions from './Accordion'
import CopyrightIcon from '@mui/icons-material/Copyright';
import Input from './Input'




export default function register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className='registerMain'>
      <div className='register'>
        <div className='topbar'>
          <img src={Netflix} alt="logo" />
          <div className='topright'>
            <select name="langauge" id="lang" className='select'>
              <option value="english">English</option>
              <option value="tamil">Tamil</option>
            </select>
            <button className='loginButton'>Sign In </button>
          </div>
        </div>
        <div className="container">
          <h1>Unlimited movies, TV <br />shows and more.
          </h1>
          <h2>Watch anywhere. Cancel anytime.
          </h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.
          </h3>
          {!email ? (
            <div className="signup">
              <input type="text" placeholder='Enter your Email id' ref={emailRef} />
              <button className='signupButton' onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <div className="signup">
              <input type="password" placeholder='Enter your password' ref={passwordRef} />
              <button className='signupButton' onClick={handleFinish}>
                Start
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='section'>
        <div className="flex6">
          <h1>Enjoy on your TV.</h1>
          <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
        </div>
        <div className="flex4"><img src={tv} alt="tv" /></div>
      </div>
      <div className='section'>
        <div className="flex4"><img src={mobile} alt="tv" /></div>
        <div className="flex6">
          <h1>Download your shows to watch offline.</h1>
          <h2>Save your favourites easily and always have something to watch.</h2>
        </div>
      </div>
      <div className='section'>
        <div className="flex6">
          <h1>Watch everywhere.</h1>
          <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        </div>
        <div className="flex4"><img src={thumbnail} alt="tv" /></div>
      </div>
      <div className='section'>
        <div className="flex4"><img src={children} alt="tv" /></div>
        <div className="flex6">
          <h1>Create profiles for children.</h1>
          <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
        </div>
      </div>
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion">
          <div className="accord">
            <Accordions />
            </div>
          {!email ? (
            <div className="signup">
              <input type="text" placeholder='Enter your Email id' ref={emailRef} />
              <button className='signupButton' onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <div className="signup">
              <input type="password" placeholder='Enter your password' ref={passwordRef} />
              <button className='signupButton' onClick={handleFinish}>
                Start
              </button>
            </div>
          )}
        </div>

      </div>
      <div className="footer">
        <CopyrightIcon/>
        Copyright by Venkatesan
      </div>
    </div>
  )
}
