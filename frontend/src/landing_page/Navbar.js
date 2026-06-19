import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav class="navbar border-bottom navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand mx-5" to="/">

            <img src="images/logo.svg" style={{width:"30%"}} alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  about
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/product">
                  product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
             
            </ul>
            <form class="d-flex" role="search">
            
              
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
