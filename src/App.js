import React from 'react';
import Header from './Component/Header'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

import Cart from './Component/Cart'
import Home from './Component/Home'
// import ProductList from './Component/ProductList'
 import Slider from './Component/Slider'
import {GlobalProvider} from './Context/CreateContext'
import Footer from './Component/Footer'
function App() {
  return (
    <div >
     
    
      <GlobalProvider>
          <div className="container" >     
          <Router>
          <Header/>
          <Slider/>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                
                
                <Route path='/cart' element={<Cart />}></Route>
                
              </Routes>
          </Router>  
          <Footer/>
          </div>
        </GlobalProvider>
          
    </div>
  );
}

export default App;
