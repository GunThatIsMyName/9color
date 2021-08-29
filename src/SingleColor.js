import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index ,hexColor}) => {
  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(",")
  const colorName = `#${hexColor}`
  const colorChange = ()=>{
    return index>10?"#fff":""
  }
  useEffect(()=>{
    const clear = setTimeout(() => {
      setAlert(false)
    }, 1500);
    return ()=>{
      clearTimeout(clear)
    }
  },[alert])
  const handleClick= (e)=>{
    console.log(e.target)
    setAlert(true)
    navigator.clipboard.writeText(colorName)
  }
  return (
    <article className="color" onClick={handleClick} style={{ backgroundColor:`rgb(${bcg})` }}>
      <p style={{color:colorChange()}} className="percent-value">{weight} % </p>
      <p style={{color:colorChange()}} className="color-value">{colorName}</p>
      {<p className={alert?"alert":"noti"}>{alert?"COPIED  on CLipboad" : " click to copy"}</p> }
    </article>
  );
};

export default SingleColor;
