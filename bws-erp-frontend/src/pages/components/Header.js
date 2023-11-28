import React from 'react'
// import { Container, Row, Col, Card, FormControl, InputGroup } from 'react-bootstrap';
import './Header.css'
// import PersonIcon from '@material-ui/icons/Person'
// import IconButton from '@material-ui/core/IconButton'
// import ForumIcon from '@material-ui/icons/Forum'



const Header = () => {
  return (
    <div class="container header">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
          <h3>BWS</h3>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-black">Work</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Process</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Philosophy</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Company</a></li>
        </ul>

        {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"></input>
        </form> */}

        <div class="text-end">
          <a href="/user/home">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
          </a>
          <a href="/user/home">
            <button type="button" class="btn btn-warning">Sign-up</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;