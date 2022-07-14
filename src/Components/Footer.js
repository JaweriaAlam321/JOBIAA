import React from 'react'
import JobiaLogo from '../assets/Jobia_Logo.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../Styles/style.css'
const Footer = () => {
  return (
    <div className='footer'>
    <div class="row align-items-start">
      <div class="col">
      <a class="navbar-brand" href="#">
            <img src={JobiaLogo} alt="" width="100" height="24" />
          </a>
      </div>
      <div class="col footer-font">
      Terms and Policies
      </div>
      <div class="col footer-font-style ">
      © Jobia Inc. 2019. We love our users!
      </div>
    </div>
  </div>
  )
}

export default Footer