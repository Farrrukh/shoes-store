import React from 'react';
import Header from './Component/Header'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Cart from './Component/Cart'
import Home from './Component/Home'
// import ProductList from './Component/ProductList'
import Slider from './Component/Slider'
import {GlobalProvider} from './Context/CreateContext'

function App() {
  return (
    <div >
      <GlobalProvider>
        <div className="container" >          
          <Router>
          <Header />
          <Slider/>
            <Switch>  
            <Route path="/cart" component={Cart} />
            <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </div>
      </GlobalProvider>
    
          
    </div>
  );
}

export default App;
