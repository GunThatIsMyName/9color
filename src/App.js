import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor]=useState("");
  const [error,setError]=useState(false);
  const [list,setList] =useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault()
    try{
      let newColors = new Values(color).all(10)
      setList(newColors)
      setError(false)
    }catch(error){
      setError(error)
      console.log(error)
    }
  }
  return (
    <>
      <section className="container">
        <h3>COLOR MACHINE</h3>
        <form onSubmit={handleSubmit}>
          <input className={`${error?"error":"null"}`} type="text" value={color?color:`#${color}`} placeholder="#fff" maxLength="7" onChange={(e)=>setColor(e.target.value)}/>
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
        {list.map((color,index)=><SingleColor key={index} {...color} index={index} hexColor={color.hex} />)}
      </section>
    </>
  )
}

export default App
