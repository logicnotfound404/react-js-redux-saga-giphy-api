import React, { Component } from 'react';
import { connect } from 'react-redux';  
import {getContents} from '../../store/giphy/action'
import {Layout} from '../../components/templates' 
import {GifList} from '../../components/commons' 


 export class Index extends Component{
  constructor(props){
    super(props); 
    this.state = { 
      limit : 9,
      q:''
    } 
  }

  componentDidMount(){ 
  }

  onChangeInput(e){
    if(e && e.target && e.target.value)
      this.setState({q:e.target.value},()=>{
        this.props.dispatch(getContents({ q : this.state.q , limit : this.state.limit}))
      })
  }
   
  render(){
    const {content_giphy_list,content_giphy_loader} = this.props.Giphy
    const {q} = this.state

    return (
        <Layout>
            <div className="container"> 
              <div className="header-text">
                  <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                      <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                    </svg>
                  </a>
                  <div className="text-center search-gif-header">
                    <h1 className="m-4">SEARCH YOUR GIPHY</h1>
                    <div className="text-center"> 
                      <input name="q" className="search-input-gif" placeholder="Search your gif" onChange={(e) => this.onChangeInput(e)}/> 
                    </div>
                  </div> 
                  {
                    content_giphy_loader &&
                     <div className="text-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                            <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                        </svg>
                      </div>
                  }
              </div>

              <div className="row">
                
                { 
                  this.state.q && content_giphy_list && 
                      <GifList items={content_giphy_list}/>
                } 
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