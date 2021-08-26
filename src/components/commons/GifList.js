import React, { Component } from 'react';   
import {GifCardItem} from './'

const GifList = (props) => { 
    const {items} = props
    return(
        <div className="row"> 
            {
                items && items.map((item,index) => {
                    return <GifCardItem item={item} key={item.id} />   
                })
            }
            {
                items != null  && items.length < 1 && 
                    <p className="text-center">No data found</p>
            }
        </div>
    )
}
 
export {GifList}