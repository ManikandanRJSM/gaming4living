import React, { useState, useEffect } from 'react'

function LeftSidebar() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        fetch('https://api.twitch.tv/helix/games/top', {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer iemqodydrew18rjgv5zvlhn64tfmt3',
                'Client-Id': '7lgqku9ix50ckzvnlscpdsfjv26zw2',
              },
        })
          .then(results => results.json())
          .then(games => {
            console.log(games)
            setGamelist(games.data)
          });
    }, [])
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
  
  export default LeftSidebar