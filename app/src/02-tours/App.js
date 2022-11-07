import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  
  const [load,setLoad] = useState(true)
  const [tours, setTours] = useState([]);

  const removeTour=(id)=>{
    const newTours= tours.filter((tour)=>{
      if(tour.id!==id){
        return tour
      }
    })
    setTours(newTours)  
  }


  // const getData = async()=>{
  //   const fetchData = await fetch(url)
  //   const data = await fetchData.json()
  //   setTours(data)
  //   console.log(tours)
  //   setLoad('false')
  // }
  useEffect(()=>{
    fetch(url)
    .then((resp)=>{
      if(resp.status>=200 && resp.status<299){
        return resp.json()
      }
    })
    .then((data)=>{
     setTours(data)
     console.log(data)
     setLoad(false)
    })
    .catch((error)=>console.log(error))
  },[])

  const refreshPage=()=>{
    window.location.reload(false)
  }

    if(load){
     return <main><Loading/></main>
    }
    if(tours.length==0){
      return<main>
        <div className='title'>
        <h2>No Tours to Display</h2>
        <button className='btn' onClick={refreshPage}>Refresh</button>
        </div>
        </main>
    }
   return <main>
    <Tours tours={tours} removeTour={removeTour}/>
   </main>

}

export default App
