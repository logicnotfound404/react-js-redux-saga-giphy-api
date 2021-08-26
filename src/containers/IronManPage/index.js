import React, { Component } from 'react';
import { connect } from 'react-redux';  
import {getContents} from '../../store/giphy/action'
import {Layout} from '../../components/templates' 
import {GifList} from '../../components/commons' 


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
    const {content_giphy_list} = this.props.Giphy

    return (
        <Layout>
            <div className="container">
             
              <div className="header-text">
                  <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                      <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                    </svg>
                  </a>
                  <h1 className="text-center m-4">IRON MAN GIPHY</h1>
              </div>

              <div className="row">
                 
              <GifList items={content_giphy_list}/>

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