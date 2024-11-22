import React from 'react'
import './App.css'
import axios from 'axios'
import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import { originals,action,comedy } from './urls';


function App() {

  // const [state,setState] = useState([])

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Rowpost url={originals} title='Netflix Originals'></Rowpost>
      <Rowpost url={action} title='Action' isSmall={true}></Rowpost>
      {/* <Rowpost url={comedy} title='Comedy' isCom={true}></Rowpost> */}

      {/* <h3>Hello!</h3>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data)
          setState(response.data)
        })
      }} >Click Me</button>
      {state.map((obj,index)=>{
        return(
          <div>
            <h1>{index+1}</h1>
            <h1>{obj.title}</h1>
            <h4>{obj.body}</h4>
          </div>
        )
      })} */}
    </div>
  )
}
export default App
