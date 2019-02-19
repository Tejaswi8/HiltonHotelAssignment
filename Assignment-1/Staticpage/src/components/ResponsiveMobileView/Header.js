import React, { Component, PropTypes } from 'react'
import icon from './../../assets/HI_mk_logo_hiltonbrandlogo_3.jpg'

import style from './Header.css'
export class Header extends React.Component{
  constructor(){
    super();   
  }
  
  render(){    
    return(
            <div className={style["header"]}> 
                <div>
                    <button className={style["backBtn"]}> &lt; Back</button>
                    <span><label className={style["title"]}>Hotel Details</label></span>
                    <span className={style["logo"]}><img src={icon} className={style["logo-icon"]}></img></span>
                </div> 
            
            </div>
          );
        }
}



export default Header