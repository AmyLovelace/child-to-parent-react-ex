import React, { useState } from 'react'
import Child from './Child'
import './Parent.css'
import TextToSpeech from './components/TextToSpeech';

export default function Parent() {
  const [word,setWord] = useState('Parent');

  return (
    <>
    <div className='parent'>
        <h1>{word}</h1>
        {/* <Child
        changeWord={word => setWord(word)}
        /> */}
         <TextToSpeech/>
      
    </div>
    </>
  )
}
