import React, { Component, PropTypes } from 'react'
import hotelexterior from './../../assets/hotelexterior.jpg';
import ListView from './ListView';

import style from './MainContent.css'
export class MainContent extends React.Component{
  constructor(){
    super();   
  }
  
  render(){    
    return(
            <div className={style["mainContent"]}> 
                <div className={style["image-div"]}>
                <img src={hotelexterior} className={style["hotelImg"]}></img>
                </div>
                <div className={style["address"]}>
                    <h4 className={style["margn-btm"]}>Hilton Chicago</h4>
                    <p>720 south Michigan Avenue </p>
                    <p> Chicago, illnois, 6065 </p>
                </div>
                <ListView/>
            </div>
          );
        }
}



export default MainContent