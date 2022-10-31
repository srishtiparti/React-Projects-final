import React from 'react';

// Iterate over data
const List = ({people}) => {
  return (
    <>
    {people.map((person)=>{
      const {id,name,age,image} = person
      return <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
        <h4>{name}</h4>
        <h3>{age}</h3>
        </div>
      </article>
    })}
      
    </>
  );
};

export default List;
