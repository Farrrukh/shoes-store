import React,{useContext} from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import {GlobalContext} from '../Context/CreateContext';
import CartList from './CartList'

const Cart = () => {
    const {product}=useContext(GlobalContext)
    return (
        <div>
            <TableContainer component={Paper}>
                {product.map((item)=>(<CartList key={item.id} product={item} price={item.price}/>))}

            </TableContainer>
            
        </div>
    )
}

export default Cart
