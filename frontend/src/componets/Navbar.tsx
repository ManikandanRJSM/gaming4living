import React, { useState, useEffect } from 'react'

function Navbar() {
  
    return (
      <>
      
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a href="./index.html">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-lg-2">
                        <div className="header__right">
                            {/* <a>Powered by <i className="fa fa-twitch"></i></a> */}
                            <a href="https://github.com/ManikandanRJSM" target='_blank'><i className="fa fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/manikandan-r-b10383183/" target='_blank'><i className="fa fa-linkedin"></i></a>
                            
                            
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
        
      </>
    )
  }
  
  export default Navbar