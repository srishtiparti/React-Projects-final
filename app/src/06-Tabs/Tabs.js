import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'


function Tabs({data,value}) {
    const {id,company,dates,duties,order,title} =data[value]
  return (
    <div>
        <header>
            <h3>{title}</h3> 
            <h4>{company}</h4>
        </header>
        <p className='job-date'>{dates}</p>
        <div >
            {
                duties.map((duty)=>{
                    return (
                        <div key={id} className='job-desc'>
                            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                            <p>{duty}</p>
                        </div>
                    )
                })
            }
        </div>
        

    </div>
  )
}

export default Tabs
