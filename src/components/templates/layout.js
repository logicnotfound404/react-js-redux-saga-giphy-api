import React, { Component } from 'react';  
import {Meta} from './'

const Layout = (props) => { 
    return(
       <>
        <Meta/>
        <body>
          {
            props.children
          }
        </body>
       </>
    )
}
 
export {Layout}