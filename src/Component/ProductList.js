import React, {useContext} from 'react'
import Product from './Product'
import {Grid} from '@material-ui/core'
import {GlobalContext} from '../Context/CreateContext'


const ProductList = () => {
    const {product} = useContext(GlobalContext)

    return (
        <Grid  container spacing={3} > 
            {product.map((e)=>(
                <Product key={e.id} product={e} id={e.id} name={e.name} price={e.price} imgUrl={e.img} />
            ))}
        </Grid>
    )
}

export default ProductList
