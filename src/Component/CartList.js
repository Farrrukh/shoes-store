import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {GlobalContext} from '../Context/CreateContext';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }






export default function CartList({product,price}) {
    // function subtotal() {
    //     return product.map((e) => e.price).reduce((sum, i) => sum + i, 0);
    //   }
      
    // const invoiceSubtotal = subtotal();
    const {removeFromCart,
        increase,
        decrease}=useContext(GlobalContext)
  const classes = useStyles();
  const remove=()=>{
         removeFromCart(product.id) 
     }

 const inc=()=>{
     increase(product.id)
 }
 const dec=()=>{
    if (product.quantity <= 1) {
        remove()
    } else {
        decrease(product.id);
    }
 }
  return (
     
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Increase</TableCell>
            <TableCell align="right">Decrease</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <Button color="primary" onClick={inc}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                    <Button color="secondary" onClick={dec}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </Button>
            </TableRow>
        

          {/* <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Cart Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
  );
}