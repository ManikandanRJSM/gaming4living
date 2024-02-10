import React, { useState, useEffect } from 'react'

function GameLists() {
    const [gamelist, setGamelist] = useState([])

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
          .then(games => {
            console.log(games)
            setGamelist(games.data)
          });
      }, []);
  
    return (
      <>
      <div className="row">
        {gamelist.map(game => (          
          <div className="col-sm-3 mb-3 mb-sm-4" key={game.id}>
            <img src={game.box_art_url.replace('{width}', '9000').replace('{height}', '9000')} className="card-img-top" alt="..."/  >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6 game-name-cls">{game.name}</span>
                </h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a href="#" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>
        
          
        ))}
      </div>
      </>
    )
  }
  
  export default GameLists