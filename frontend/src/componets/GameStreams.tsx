import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import SiteLoader from './SiteLoader';

function GameStreams() {

    const [streams, setStreams] = useState<string[]>([])
    const [paginateQuery, setPaginateQuery] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const { gameId } = useParams();


    useEffect(() => {

        let authParams = {
            'authStr' : 'Bearer iemqodydrew18rjgv5zvlhn64tfmt3',
            'clientId': '7lgqku9ix50ckzvnlscpdsfjv26zw2'
        }
        getStreams(authParams)
        
    }, []);

    const getStreams = (authParams : {
        authStr : string,
        clientId : string 
        }, paginateQuery: string | null = null) => {

        let fetchURL = `https://api.twitch.tv/helix/streams?first=18&game_id=${gameId}`;
        if(paginateQuery){
          fetchURL = `https://api.twitch.tv/helix/streams?first=18&game_id=${gameId}&after=${paginateQuery}`;
      }
        fetch(fetchURL, {
            method: 'GET',
            headers:{
                'Authorization': authParams.authStr,
                'Client-Id': authParams.clientId,
              },
        })
          .then(results => results.json())
          .then(streams => {

                if(paginateQuery){
                    setStreams(prevData => [...prevData, ...streams.data]);
                }else{
                    setStreams(streams.data)
                } // end if
                // Set paginate query for next page.
                setPaginateQuery(streams.pagination.cursor)
                setIsLoading(false)
                // console.log(streams.data);
          });
    }

    const loadMore = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        let authParams = {
            'authStr' : 'Bearer iemqodydrew18rjgv5zvlhn64tfmt3',
            'clientId': '7lgqku9ix50ckzvnlscpdsfjv26zw2'
        }
        setIsLoading(true)
        console.log(paginateQuery);
        getStreams(authParams, paginateQuery)
       
    }    

    if(isLoading){
        return <SiteLoader />
    }
  
    return (
      <>

          <div className="col-lg-8">
            <div className="trending__product">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="section-title">
                            <h4>Streams</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className="btn__all">
                              <a href="/" className="primary-btn">Go Back <span className="arrow_left"></span></a>
                          </div>
                      </div>
                </div>
                <div className="row">
                    {(streams.length > 0) ? streams.map( (stream, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                {/* data-setbg={stream.thumbnail_url.replace('{width}', '1000').replace('{height}', '500')} */}
                                <img src={stream.thumbnail_url.replace('{width}', '250').replace('{height}', '250')} alt="..."/  >
                                    <div className="ep">{stream.type.toUpperCase()}</div>
                                    <div className="view"><i className="fa fa-eye"></i>{stream.viewer_count}</div>
                                </div>
                                <div className="product__item__text">
                                    <ul>
                                        <li>{stream.game_name}</li>
                                    </ul>
                                    <h5><Link to={`/stream/${stream.user_name}/${stream.id}`} relative="path">{stream.title}</Link></h5>
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
  
  export default GameStreams