import React, { useState } from 'react'
import './Parent.css'

export default function Child({changeWord}) {

  const [inputValue, setInputValue]=useState('')

  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  }

  const handleSubmit=() =>{
    changeWord(inputValue)
  }


  return (
    <div className='child'>
        <h1>Child</h1>
        <input type="text" 
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter new title for Parent component'
        />
         <button onClick={handleSubmit}
        >Change Parent Title</button>
      
    </div>
  )
}
