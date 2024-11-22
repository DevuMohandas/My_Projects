import React, { useEffect } from 'react'
import { useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {

  const [movie,setMovie] = useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[1])
      setMovie(response.data.results[1])
    })
  },[])

  return (
    <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }} className='banner'>
      <div className='content'>
      <h1 className="title">{movie ? movie.title ? movie.title : movie.name : ''}</h1>
        <div className='banner-buttons'> 
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview
 ? movie.overview : movie.overview : ''}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
