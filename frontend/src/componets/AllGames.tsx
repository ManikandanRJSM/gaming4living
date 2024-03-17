import React, { useState, useEffect } from 'react'
import SiteLoader from './SiteLoader';
import { Link } from "react-router-dom";

function AllGames() {
    const [gamesList, setGamesList] = useState<string[]>([])
    const [paginateQuery, setPaginateQuery] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let authParams = {
            'authStr' : 'Bearer iemqodydrew18rjgv5zvlhn64tfmt3',
            'clientId': '7lgqku9ix50ckzvnlscpdsfjv26zw2'
        }
        getGames(authParams)
    })

    const getGames = (authParams : {
        authStr : string,
        clientId : string 
        }, paginateQuery: string | null = null) => {

        let fetchURL = 'https://api.twitch.tv/helix/games/top?first=18';
        if(paginateQuery){
            fetchURL = 'https://api.twitch.tv/helix/games/top?first=18&after='+paginateQuery;
        }
        fetch(fetchURL, {
            method: 'GET',
            headers:{
                'Authorization': authParams.authStr,
                'Client-Id': authParams.clientId,
              },
        })
          .then(results => results.json())
          .then(games => {

                if(paginateQuery){
                    setGamesList(prevData => [...prevData, ...games.data]);
                }else{
                    setGamesList(games.data)
                } // end if
                // Set paginate query for next page.
                setPaginateQuery(games.pagination.cursor)
                setIsLoading(false)
                console.log(games.data);
          });
    }

    const loadMore = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        let authParams = {
            'authStr' : 'Bearer iemqodydrew18rjgv5zvlhn64tfmt3',
            'clientId': '7lgqku9ix50ckzvnlscpdsfjv26zw2'
        }
        setIsLoading(true)
        getGames(authParams, paginateQuery)
       
    }

    if(isLoading){
        return <SiteLoader />
    } // end if
    return (
        <>
  
            <div className="col-lg-8">
              <div className="trending__product">
                  <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                          <div className="section-title">
                              <h4>Games</h4>
                          </div>
                      </div>
                      {/* <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className="btn__all">
                              <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
                          </div>
                      </div> */}
                  </div>
                  <div className="row">
                      {(gamesList.length > 0) ? gamesList.map(game => (
                          <div className="col-lg-4 col-md-6 col-sm-6" key={game.id}>
                              <div className="product__item">
                                  <div className="product__item__pic set-bg">
                                  <img src={game.box_art_url.replace('{width}', '230').replace('{height}', '325')} alt="..."/  >
                                      {/* <div className="ep">{game.type}</div> */}
                                      {/* <div className="view"><i className="fa fa-eye"></i>{game.viewer_count}</div> */}
                                  </div>
                                  <div className="product__item__text">
                                      
                                      <h5><Link to={`/games-streams/${game.user_name}/${game.id}`} relative="path">{game.name}</Link></h5>
                                  </div>
                              </div>
                          </div>
                  
              
                      )) : ""}
                  </div>
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="hero__text">
                              <a href="#" onClick={loadMore}><span>Load More</span> <i className="fa fa-angle-down"></i></a>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
        </>
      )
}
  
  export default AllGames