import React from 'react'
import "./Card.css"


function Card({name,jersey,score,wickets}) {
    return (
       <div className="card">
        <h1 className='name'>{name}</h1>
        <h1 className='jersey'>{jersey}</h1>
        <h1 className='score'>{score}</h1>
        <h1 className='wickets'>{wickets}</h1>
       </div>
      );
}

export default Card
