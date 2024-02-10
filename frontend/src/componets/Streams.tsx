import React, { useState, useEffect } from 'react'

function Streams() {
    const [streams, setStreams] = useState([])

    const AuthStr = 'Bearer iemqodydrew18rjgv5zvlhn64tfmt3'; 
    useEffect(() => {
        // fetch('https://id.twitch.tv/oauth2/token', {
        //     method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //       },
        //     body: new URLSearchParams({
        //         'client_id': '7lgqku9ix50ckzvnlscpdsfjv26zw2',
        //         'client_secret': 'q6obmcmmd3w1y3az4wgrpstdfedr37',
        //         'grant_type': 'client_credentials'
        //     })
        // })
        //   .then(results => results.json())
        //   .then(data => {
        //     console.log(data)
        //   });
        fetch('https://api.twitch.tv/helix/streams', {
            method: 'GET',
            headers:{
                'Authorization': AuthStr,
                'Client-Id': '7lgqku9ix50ckzvnlscpdsfjv26zw2',
              },
        })
          .then(results => results.json())
          .then(streams => {
            console.log(streams)
            setStreams(streams.data)
          });
      }, []);
  
    return (
      <>
      <div className="row">
        {streams.map(stream => (          
          <div className="col-sm-3 mb-3 mb-sm-4" key={stream.id}>
          <div className="badge text-wrap card-text views-count">{stream.viewer_count}</div>
            <div className="badge text-wrap live-text">{stream.type.toUpperCase()}</div>
            <img src={stream.thumbnail_url.replace('{width}', '1000').replace('{height}', '500')} className="card-img-top" alt="..."/  >
            <div className="card h-50">
              <div className="card-body">
              
                <h5 className="card-title">
                  <span className="col-6 game-name-cls">{stream.game_name}</span>
                </h5>
                  <p className="card-text">{stream.title}</p>
                
                {/* <a href="#" className="btn btn-primary">Go</a> */}
              </div>
            </div>
          </div>
        
          
        ))}
      </div>
      </>
    )
  }
  
  export default Streams