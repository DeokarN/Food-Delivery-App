import React, { useState } from 'react'
import '../css/Loginpop.css'
import { assets } from '../assets/assets';

const Loginpop = ({setshowlogin}) => {

    const [currstate,setcurstate]=useState("login");
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
              <h2>{currstate}</h2>  
              <img onClick={()=>setshowlogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currstate==="login"?<></>: <input type="text"placeholder='Your Name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password"placeholder='password' required />
            </div>
            <button>{currstate==="sign up"?"New Account":"login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currstate==="login"
            ?<p>Create a New Account ? <span onClick={()=>setcurstate("sign up")}>click here</span></p>
            :<p>Already have an account ? <span onClick={()=>setcurstate("login")}>Login here</span></p>}
            
            
        </form>
    </div>
  )
}

export default Loginpop