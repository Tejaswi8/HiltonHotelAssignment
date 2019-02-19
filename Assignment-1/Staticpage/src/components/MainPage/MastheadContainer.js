import React, { Component, PropTypes } from 'react'
import ResponsivieMobileView  from '../../components/ResponsiveMobileView/ResponsiveMobileView'
import style from './MastheadContainer.css'
export class MastheadContainer extends React.Component{
  constructor(){
    super();
  }  
  render(){    
    return(
            <div>
              <ResponsivieMobileView />                         
            </div>
          );
        }
}

export default MastheadContainer