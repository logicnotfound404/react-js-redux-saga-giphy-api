import React, { Component } from 'react';   
 
const GifCardItem = (props) => { 
    const {item} = props
    return(
        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6"> 
            <div className="content-card card bg-dark text-white"> 
                <img className="rounded" height="250" width="auto" src={item.images.original.webp}/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{item.title}</h5> 
                </div>
            </div>
        </div>
    )
}
 
export {GifCardItem}