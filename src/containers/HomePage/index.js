import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getContents} from '../../store/giphy/action'
import {Layout} from '../../components/templates' 
 
import { 
  Link,
  BrowserRouter as Router,
  Route
} from "react-router-dom"

 export class Index extends Component{
  constructor(props){
    super(props); 
    this.state = { 
      limit : 9
    } 
  }

  componentDidMount(){
    this.props.dispatch(getContents({ q : 'Iron Man' , limit : this.state.limit}))
  }
   
  render(){
    return (
      <Layout>
        <div className="container">
        
          <div className="header-text"> 
              <h1 className="text-center m-1">WELCOME TO YOUR GIPHY</h1>
          </div> 
          <div className="text-center">
            <img width="80%" src="/layouts/images/giphy-icon.png"/>
          </div>
          <div className="text-center">
              <a href="/iron-man" className="btn btn-info btn-lg mt-5">IRON MAN GIPHY</a>
          </div>
          <div className="text-center">
              <a href="/search" className="btn btn-info btn-lg mt-2">SEARCH YOUR GIPHY</a>
          </div>
          </div>
        </Layout>
    )
  }
}
 
const mapStateToProps = state => ({ 
    Giphy : state.Giphy
});
 
 
export default connect(
    mapStateToProps
)(Index)