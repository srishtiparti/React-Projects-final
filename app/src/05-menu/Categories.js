import React from 'react'

const Categories = ({ categories,buttonCategory }) => {
  return (
    <div className="btn-container">
      {
        categories.map((category,index)=>{
            return (
                <button className='filter-btn' onClick={()=>buttonCategory(category)}>
                    {category}
                </button>
            )
        })
      }
    </div>
  );
};

export default Categories;