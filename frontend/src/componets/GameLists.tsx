import React, { useState, useEffect } from 'react'

function GameLists() {
    const [gamelist, setGamelist] = useState(0)

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
        fetch('https://api.twitch.tv/helix/games/top', {
            method: 'GET',
            headers:{
                'Authorization': AuthStr,
                'Client-Id': '7lgqku9ix50ckzvnlscpdsfjv26zw2',
              },
        })
          .then(results => results.json())
          .then(data => {
            console.log(data)
          });
      }, []);
  
    return (
      <>
        Game list
      </>
    )
  }
  
  export default GameLists