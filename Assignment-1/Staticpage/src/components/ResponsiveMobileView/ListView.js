import React, { Component, PropTypes } from 'react'


import style from './ListView.css'
export class ListView extends React.Component{
  constructor(){
    super();   
  }
  
  render(){    
    return(
            <div className={style["listview"]}>
               <ul className={style["list"]}>
               <li>Map <span className={style["leftArrow"]}>&gt;</span></li>
               <li>Photo gallery <span className={style["leftArrow"]}>&gt;</span></li>
               <li>Amenities <span className={style["leftArrow"]}>&gt;</span></li>
               </ul>
            </div>
          );
        }
}



export default ListView