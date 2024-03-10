import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SiteLoader from './SiteLoader';

function Streams() {
    const [streams, setStreams] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigateTo = useNavigate();


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
            console.log(streams.data);
            setStreams(streams.data)
            setIsLoading(false)
          });
    }, []);

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
                    {/* <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="btn__all">
                            <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
                        </div>
                    </div> */}
                </div>
                <div className="row">
                    {streams.map(stream => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={stream.id}>
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                {/* data-setbg={stream.thumbnail_url.replace('{width}', '1000').replace('{height}', '500')} */}
                                <img src={stream.thumbnail_url.replace('{width}', '230').replace('{height}', '325')} alt="..."/  >
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
                
            
                    ))}
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Streams