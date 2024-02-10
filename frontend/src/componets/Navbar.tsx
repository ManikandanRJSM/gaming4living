import React, { useState, useEffect } from 'react'

function Navbar() {
  
    return (
      <>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
                Gamming4Living
                </a>
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar