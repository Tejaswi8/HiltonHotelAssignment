import React, { Component, PropTypes } from 'react'
import Header from './Header';
import MainContent from './MainContent';


import style from './ResponsiveMobileView.css'
export class ResponsiveMobileView extends React.Component{
  constructor(){
    super();   
  }
  
  render(){    
    return(
            <div>  
                <Header/>
                <MainContent/>
               
            </div>
          );
        }
}



export default ResponsiveMobileView