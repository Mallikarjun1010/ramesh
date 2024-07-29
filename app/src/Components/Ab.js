import React, { useState } from 'react'

import "./ab.css";
const imgs =[
    "https://nithysreepg.netlify.app/one.jpg","https://nithysreepg.netlify.app/two.jpg"
,"https://nithysreepg.netlify.app/three.jpg"
,"https://nithysreepg.netlify.app/five.jpg"
 
]

const Ab = () => {
    const [boxin, SetboxIn] = useState(0);
    const Handleone = (p) => {
        SetboxIn(p);
      };
  return (
    <div className='ab'>
      <div className="card">
        <div className="left">
          <div>
          <img src={imgs[boxin]} alt="jkjkj" className="imgs" />
          </div>
          <div className="flex">
            {imgs.map((each, index) => {
              return (
                <div className="flex">
                  <img
                    src={imgs[index]}
                    alt="bkbk"
                    className="size"
                    onClick={() => Handleone(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Ab
