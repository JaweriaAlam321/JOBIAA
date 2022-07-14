import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import JobiaLogo from '../assets/Jobia_Logo.png'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={JobiaLogo} alt="" width="100%" height="24" />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Get a Job</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Hire Employees</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-secondary me-2 btn-sm padding-l-15 padding-r-15" type="submit">Log in</button>
              <button className="btn btn-secondary btn-sm" type="submit">Register</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header