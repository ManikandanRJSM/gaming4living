import React, { useState, useEffect } from 'react'
import SiteLoader from './SiteLoader';
import { Link } from 'react-router-dom';

function GameSidebar() {
    const [gamesdata, setGamesdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const AuthStr = 'Bearer iemqodydrew18rjgv5zvlhn64tfmt3'; 
    useEffect(() => {
        
      fetch('https://api.twitch.tv/helix/games/top?first=18', {
          method: 'GET',
          headers:{
              'Authorization': AuthStr,
              'Client-Id': '7lgqku9ix50ckzvnlscpdsfjv26zw2',
            },
      })
      .then(results => results.json())
      .then(games => {          
        setGamesdata(games.data)
        setIsLoading(false)
        // console.log(games)
      });
    }, []);
    if(isLoading){
      return <SiteLoader />
    }
    return (
      <>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="product__sidebar">              
            <div className="product__sidebar__comment">
              <div className='row'>

                <div className="section-title">
                    <h5>Games</h5>
                          <a href="/all-games" className="primary-btn">View All <span className="arrow_right"></span></a>
                     
                </div>                
              </div>
                {gamesdata.map((game, index) => (          
                  <div className="product__sidebar__comment__item sdsadasdad" key={index}>
                      <div className="product__sidebar__comment__item__pic">
                      <img src={game.box_art_url.replace('{width}', '90').replace('{height}', '130')} className="card-img-top" alt="..."/  >
                      </div>
                      <div className="product__sidebar__comment__item__text">
                          
                          <h5><Link to={`/games-streams/${game.id}`} relative="path">{game.name}</Link></h5>
                          
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