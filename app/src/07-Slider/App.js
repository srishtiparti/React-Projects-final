import React, { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data'

function App() {
    const [people,setpeople] = useState(data)
    const [loading,setLoading] = useState(true)
    const [value,setValue] = useState(0)

    useEffect(()=>{
        const lastIndex = people.length-1
        if(value<0){
            setValue(lastIndex)
        }
        if(value>lastIndex){
            setValue(0)
        }
    },[value,people])

    useEffect(()=>{
        let slider = setInterval(()=>{
            setValue(value+1)
        },5000)
        // 
        return ()=>clearInterval(slider)
    },[value])

  return (
    <main> 
        <div className='title'>
          <h2><span>/ </span>Review</h2>
        </div> 
        <section className='section-center'>
            {
                people.map((person,personIndex)=>{
                    const {id,image,name,title,quote} =person
                    let position ='nextSlide'
                    if(personIndex==value){
                        position='activeSlide'
                    }
                    if(personIndex===value-1 ||(value===0 && personIndex===people.length-1)){
                        position='lastSlide'
                    }
                    return(
                        <article className={position} key={id}>
                            <div>
                                <img src={image} className='person-img'/>
                                <h4>{name}</h4>
                                <p className='title'>{title}</p>
                            </div>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon'></FaQuoteRight>
                        </article>
                    )
                })
            }
        <button className='prev'
        onClick={()=>{ setValue(value-1)
            // value==0?setValue(people.length-1):setValue(value-1)
        }}
        >
            <FiChevronLeft></FiChevronLeft></button>
        <button className='next'
        onClick={()=>{setValue(value+1)
            //         value<(people.length-1)
       // ?setValue(value+1):setValue(0)
        }}
        ><FiChevronRight></FiChevronRight></button>
        </section>
    </main>
  )
}

export default App
