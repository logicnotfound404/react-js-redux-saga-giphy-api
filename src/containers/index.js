import React, { Component } from 'react';
import { connect } from 'react-redux';  
import {getContents} from '../store/giphy/action'
import {Layout} from '../components/templates'
import SearchPage from './SearchPage'
import IronManPage from './IronManPage'
import HomePage from './HomePage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <Router>
        <Switch>   
            <Route exact path="/" component={HomePage}/>
            <Route  path="/search" component={SearchPage}/>
            <Route path="/iron-man" component={IronManPage}/>
        </Switch>
      </Router>
    )
  }
}
 
const mapStateToProps = state => ({ 
    Giphy : state.Giphy
});
 
 
export default connect(
    mapStateToProps
)(Index)