import React,{useState,useEffect} from 'react'
import Tabs from './Tabs'

const url = 'https://course-api.com/react-tabs-project'

function App() {
    let jobs
    const [data,setData] = useState([])
    const [loading,setloading]=useState(true)
    const [error,setError] = useState(false)
    const [value,setValue] = useState(0)
    useEffect(()=>{
        fetch(url)
        .then((resp)=>{
            if(resp.status>=200 && resp.status<299){
                return resp.json()
            }
            else{
                setError(true)
            }
            })
        .then((tabs)=>{
            setData(tabs)
            setloading(false)
        })
    },[])

    console.log(data)

    if(loading){
        return(
            <main>
                <section className='section'>
                    <div className='loading'>
                        <h2>Loading</h2>
                    </div>
                </section>
            </main>
        )
    }

    else{
        // jobs = new Set(data.map((tabs)=>{return tabs.company}))
        // jobs = Array.from(jobs)
        // console.log(jobs)

  return (
    <main>
        <section className='section'>
            <div className='title'>
                <h2>Experience</h2>
                <div className='underline'></div>
            </div>
            <div className='jobs-center'>    
            <div className='btn-container'>
                {data.map((job,index)=>{
                    return <button key={job.id} 
                    onClick={()=>setValue(index)}
                    className={`job-btn ${index===value&&'active-btn'}`}
                    >{job.company}</button>
                })}
            </div>
            <div className='job-info'>
               <Tabs data={data} value={value}/> 
            </div>     
            </div>
        </section>
    </main>   
  )
}
}
export default App
