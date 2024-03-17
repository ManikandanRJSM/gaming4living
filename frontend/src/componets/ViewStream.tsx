import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom";
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

function ViewStream() {
  const { streamer, id } = useParams();
  
  return (
    <>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="/"><i className="fa fa-home"></i> Home</a>                  
                <span>{streamer}</span>
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
                  channel={streamer}
                  height={1070}
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