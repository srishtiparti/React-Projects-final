import React, { useState } from 'react'
import reviews from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
    const [index, setIndex] = useState(0);
    const {name,job,image,text} = reviews[index]    

  return <article>
    <div className='review'>
        <div className='img-container'>
        <img src= {image} className='person-img' alt={name}/>
        <span className='quote-icon'>
            <FaQuoteRight/>
        </span>
        </div>

        <div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>

            <div className='button-container'>
            <button className='prev-btn' onClick={()=>{
                index==0
                ?setIndex(reviews.length-1)
                :setIndex(index-1)
            }}>
                <FaChevronLeft/>
            </button>

            <button className='next-btn' onClick={()=>{
                index==(reviews.length-1)
                ?setIndex(0)
                :setIndex(index+1)
            }}>
                <FaChevronRight/>
            </button>
            </div>

            <button className='random-btn' onClick={()=>{
                let min = 0
                let max = reviews.length
                let randomIndex = Math.floor(Math.random() * (max - min) + min)
                setIndex(randomIndex)
            }}>Surprise Me</button>

        </div>
    </div>
  </article>
}

export default Review
