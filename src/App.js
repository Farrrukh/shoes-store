import React from 'react';
import Header from './Component/Header'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Cart from './Component/Cart'
import Home from './Component/Home'
import Product from './Component/Product'
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
            <Route path="/product" component={Product} />
            <Route path="/" component={Home} />
            </Switch>
          </Router>
        </div>
      </GlobalProvider>
    
          
    </div>
  );
}

export default App;
