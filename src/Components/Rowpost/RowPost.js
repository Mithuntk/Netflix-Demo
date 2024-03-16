import React, { useEffect, useState } from 'react'
import { imageUrl} from '../../Constants/Constants'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import {API_KEY} from '../../Constants/Constants'
function RowPost(props) {
    const [UrlId,setUrlId] = useState()
    const [Movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovies(response.data.results)
        })
           }, [])
           
           const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
            
            const handleMovie=(id)=>{
           
            axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>
              {if(response.data.length!==0) {setUrlId(response.data.results[0])
            }else{
        console.log("empty")}}
            )}
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    Movies.map((obj)=>
                
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path} `}/>
                )}
            </div>
        {  UrlId && <YouTube videoId={UrlId.key} opts={opts} />}

            
        </div>
        
    )
}

export default RowPost