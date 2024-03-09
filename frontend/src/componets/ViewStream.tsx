import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

function ViewStream() {
    const [stream, setStream] = useState('')


    const AuthStr = 'Bearer iemqodydrew18rjgv5zvlhn64tfmt3'; 
    const currentWindow = window.location.pathname
    const streamerId = currentWindow.split('/')[2]

      
  
    return (
      <>
        <div className="breadcrumb-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb__links">
                  <a href="/"><i className="fa fa-home"></i> Home</a>                  
                  <span>{streamerId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="anime-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="anime__video__player">
                  <ReactTwitchEmbedVideo
                    channel={streamerId}
                    width={1070}
                    theme="light"
                  />
                </div>                            
              </div>
            </div>                    
          </div>
        </section>
      </>
    )
  }
  
  export default ViewStream