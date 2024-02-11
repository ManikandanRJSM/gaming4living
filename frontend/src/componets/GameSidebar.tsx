import React, { useState, useEffect } from 'react'

function GameSidebar() {
    const [gamesdata, setGamesdata] = useState([]);

    const AuthStr = 'Bearer iemqodydrew18rjgv5zvlhn64tfmt3'; 
    useEffect(() => {
        
        fetch('https://api.twitch.tv/helix/games/top', {
            method: 'GET',
            headers:{
                'Authorization': AuthStr,
                'Client-Id': '7lgqku9ix50ckzvnlscpdsfjv26zw2',
              },
        })
        .then(results => results.json())
        .then(games => {          
          setGamesdata(games.data)
          // console.log(games)
        });
      }, []);
    return (
      <>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="product__sidebar">              
            <div className="product__sidebar__comment">
                <div className="section-title">
                    <h5>Games</h5>
                </div>
                {gamesdata.map((game, index) => (          
                  <div className="product__sidebar__comment__item sdsadasdad" key={index}>
                      <div className="product__sidebar__comment__item__pic">
                      <img src={game.box_art_url.replace('{width}', '90').replace('{height}', '130')} className="card-img-top" alt="..."/  >
                      </div>
                      <div className="product__sidebar__comment__item__text">
                          
                          <h5><a href="#">{game.name}</a></h5>
                      </div>
                  </div>
        
          
                ))}
                
                
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default GameSidebar