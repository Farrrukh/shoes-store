
import React,{useContext} from 'react'
import { Grid,Paper } from '@material-ui/core'
import CartList from './CartList'
import classes from './Cart.module.css'
import { GlobalContext } from '../Context/CreateContext'
import { Link, useNavigate } from 'react-router-dom'




const Cart = () => {
    
  const {cart,checkout} = useContext(GlobalContext) 
  let messege = <h1 className={classes.messege}>YOUR CART IS EMPTY <br/> GO TO <Link to='/'>HOME</Link> FOR SHOPPING</h1>
  const navigate = useNavigate()
  const handelCheckout = ()=>{
    
    checkout()
    navigate('/')
  }
  const totalPrice =  (cart.reduce((acc, value)=>acc+value.price * value.quantity,0))
    return (
        
        <div className={classes.body}>
            <Grid container spacing={2}>
                <Grid  xs={12} sm={totalPrice === 0? 12:8} md={totalPrice === 0? 12:9} item >
                    <Paper square  className={classes.box1}>
                       <div className={classes.strip}>
                            <ul className={classes.header}>
                                <li>#</li>
                                <li>Product</li>
                                <div className={classes.qtyTop} >
                                    <div ></div>
                                    <li>Quantity</li>
                                    <div></div>
                                </div>
                                <li>Price</li>
                            </ul>
                        </div>
                        {totalPrice === 0 ? messege : 
                         cart.map((value,i)=>(
                           <CartList key={value.id} index={i} value={value}/>
                       ))}
                    </Paper>
                </Grid>
                {totalPrice === 0 ? '':
                <Grid className='total' xs={12} sm={4} md={3} item >
                <Paper square  className={classes.box1}>
                    <div className={classes.strip}>
                        <div className={classes.header}>
                            <h4>TOTAL</h4>
                        </div>
                    </div>    
                        <div className={classes.price}>
                            <div className={classes.endPrice}>
                                <div>Total Price</div>
                                <div>{totalPrice}</div>
                            </div>
                            
                            <div className={classes.discount}>
                                <div>Discount</div>
                                <div> 0</div>
                            </div>
                            <div className={classes.discount}>
                                <div>Sales TAX</div>
                                <div> 0</div>
                            </div>
                            
                            <hr/>
                            <div className={classes.endTotal}>
                                <div>Grand Total</div>
                                <div>{totalPrice}</div>
                            </div>
                            
                        </div>
                        <div onClick={handelCheckout} className={classes.checkout}>CHECKOUT</div>
                </Paper>
            </Grid> }
            </Grid>
            
        </div>
    )
}
export default Cart
