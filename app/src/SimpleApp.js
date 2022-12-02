import React, { useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data'

function App() {
    const [people,setpeople] = useState(data)
    const [loading,setLoading] = useState(true)
    const [value,setValue] = useState(0)

  return (
    <main> 
        <div className='title'>
          <h2><span>/ </span>Review</h2>
        </div> 
        <section className='section-center'>
            <article>
            <div>
                <img src={people[value].image} className='person-img'/>

                    <h4>{people[value].name}</h4>
                    <p className='title'>{people[value].title}</p>
            </div>
            <p className='text'>{people[value].quote}</p>
            <FaQuoteRight className='icon'></FaQuoteRight>
        </article>
        <button className='prev'
        onClick={()=>{
            value==0?setValue(people.length-1):setValue(value-1)
        }}
        >
            <FiChevronLeft></FiChevronLeft></button>
        <button className='next'
        onClick={()=>{
        value<(people.length-1)
        ?setValue(value+1):setValue(0)
        }}
        ><FiChevronRight></FiChevronRight></button>
        </section>
    </main>
  )
}

export default App
