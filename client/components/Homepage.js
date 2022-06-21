import React from 'react'
import { Button } from "@mui/material";

const Homepage = () => {

  return (
    <div>
      <div className="boys-book" >
        <img src='ReadABook2.png' className='child-with-book' />
        <h1>
          “The more that you read, the more things you will know. The more you learn, the more places you’ll go.”— Dr. Seuss
        </h1>
      </div>
      <div className="girls-book" >
        <h1>
          “There is more treasure in books than in all the pirate’s loot on Treasure Island.” – Walt Disney
        </h1>
        <img src='ReadABook.png' className='child-with-book girl' />
      </div>
    </div>
  )
}

export default Homepage
