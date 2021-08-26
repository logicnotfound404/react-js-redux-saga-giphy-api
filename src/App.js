import React, { Component } from 'react'; 
import { Provider } from 'react-redux';
import { store } from './store/store';   
import Page from './containers';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export class App extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){ 
  }
 
  render(){
    let persistor = persistStore(store)
    return(
       <Provider store={store}>  
          <PersistGate loading={false} persistor={persistor}>
            <Page/>
          </PersistGate>
       </Provider>
   );
  }
} 
export default App;