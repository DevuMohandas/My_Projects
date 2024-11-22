import React, { useEffect,useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube'

function Rowpost(props) {

  const [movies,setMovies] = useState([])
  const [urlId,setUrlid] = useState('')

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlid(response.data.results[0])
      }
      else{
        alert("Trailer Not Available")
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster': props.isCom? 'Com':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key}></YouTube>}
    </div>
  )
}

export default Rowpost
