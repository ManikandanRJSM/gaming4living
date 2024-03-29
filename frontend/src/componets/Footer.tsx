import React, { useState, useEffect } from 'react'

function Footer() {
    const year = new Date().getFullYear();

    return (
      <>
        <footer className="footer">
          <div className="page-up">
              <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-3">
                      <div className="footer__logo">
                          <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="footer__nav">
                          {/* <ul>
                              <li className="active"><a href="./index.html">Homepage</a></li>
                              <li><a href="./categories.html">Categories</a></li>
                              <li><a href="./blog.html">Our Blog</a></li>
                              <li><a href="#">Contacts</a></li>
                          </ul> */}
                      </div>
                  </div>
                  
                  <div className="col-lg-9">
                        <p style={{paddingLeft: "450px", margin : "0"}}>
                            v1.0 Copyright &copy; {new Date().getFullYear()} All rights reserved | ManikandanRJSM <i className="fa fa-heart" aria-hidden="true"></i>
                        </p>

                    </div>
                </div>
            </div>
        </footer>
      </>
    )}
  
  export default Footer