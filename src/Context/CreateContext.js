import React, { createContext,useReducer } from 'react'
import Reducer from './Reducer'


const initialState={
    product:[
    {id:1,name:'Nike',price:1000,img:require('../Component/Images/shoes1.jpeg')},
    {id:2,name:'Puma',price:2000,img:require('../Component/Images/shoes2.jpeg')},
    {id:3,name:'Service',price:5000,img:require('../Component/Images/shoes3.jpeg')},
    {id:4,name:'Nike',price:6000,img:require('../Component/Images/shoes4.jpeg')},
    {id:5,name:'Hush Puppies',price:4000,img:require('../Component/Images/shoes5.jpeg')},
    {id:6,name:'Puma',price:6000,img:require('../Component/Images/shoes6.jpeg')},
    {id:7,name:'Nike',price:8000,img:require('../Component/Images/shoes7.jpeg')},
    {id:8,name:'Puma',price:10000,img:require('../Component/Images/shoes8.jpeg')}

],
cart:[

]
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children})=>{

    const [state,dispatch]=useReducer(Reducer,initialState);

    function addToCarts(product){
        dispatch({
            type:'Add',
            payload:product
        })

    }
    function removeFromCart(id) {
        dispatch({
            type:'Remove',
            payload:id
        })
        
    }
    function increase(id) {
        dispatch({
            type:'increase',
            payload:id
        })
    }
    function decrease(id) {
        dispatch({
            type:'decrease',
            payload:id
        })
    }

    return(
        <GlobalContext.Provider value={{product:state.product,
        cart:state.cart,
        addToCarts,
        removeFromCart,
        increase,
        decrease}}>
            {children}
        </GlobalContext.Provider>
    )

}
