import React, { useState } from 'react'
import Categories from './Categories'
import items from './data'
import Menu from './Menu'

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
function App() {



    const [menuItems,setMenuItems] = useState(items)
    const [categories,setCategories] = useState(allCategories)
    console.log(categories)

    const buttonCategory = (category)=>{
        let newMenuItems
        if(category=='all'){
             newMenuItems =items
        }
        else{
         newMenuItems=items.filter((item)=>{
            if(item.category==category){
                return item
            }
        })
    }
        setMenuItems(newMenuItems)
    }

  return (
    <main>
        <section className='menu section'>
        <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'></div>
        </div>
            
            <Categories categories={categories} buttonCategory={buttonCategory}/>

        <div className='section-center'>
            {
                menuItems.map((item)=>{
                  return  <Menu key={item.id}{...item}></Menu>
                })
            }
        </div>
        </section>
    </main>
  )
}

export default App
