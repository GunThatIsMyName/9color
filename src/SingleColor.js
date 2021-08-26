import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index ,hexColor}) => {
  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(",")
  const colorChange = ()=>{
    return index>13?"#fff":""
  }
  return (
    <article className="color" style={{ backgroundColor:`rgb(${bcg})` }}>
      <p style={{color:colorChange()}} className="percent-value">{weight} % </p>
      <p style={{color:colorChange()}} className="color-value">#{hexColor}</p>
    </article>
  );
};

export default SingleColor;
