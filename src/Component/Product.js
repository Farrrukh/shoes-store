import React,{useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GlobalContext} from '../Context/CreateContext';
import {
    CardActionArea,
    CardContent,
    CardActions,
    Button,
    CardMedia,
    Typography,
    Card,
    Grid,
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
      },
      card: {
        maxWidth: 445,
        margin:'0 auto',

      },
      img: {
        width: "400px",
        margin: "0 auto",
      },
      btn: {
        backgroundColor: "#3f51b5",
        color: "#fff",
        width: "100%",
        padding: "10px",
      },
      action: {
        backgroundColor: "grey",
        boxShadow:"0px 0px 8px gray",
        width: "100%",
      },
      mainBox:{
        marginBottom:30,
      }
}));

export default function Product({product ,id,name,price,imgUrl}) {
  const classes = useStyles();
  const { addToCarts, cart ,increase } = useContext(GlobalContext);
  const [btnText, setBtnText]  = useState('ADD TO CART')
  const addToCart = () => {
    if( cart.find((e)=>e.id===product.id)) {
      
      increase(id)

    }
    else{  
    product.quantity = 1
    addToCarts({product});
    setBtnText('ADD MORE')
    }
  };

  return (
    <>
      <Grid className={classes.mainBox} xs={12} sm={6} md={3} item>
      <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.img}
              component="img"
              alt="Shoe Store"
              height="200"
              image={product.img}
              title="Shoe Store"
            />
            <CardContent>
              <Typography style={{marginTop:'10px'}} align='center' noWrap  variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography
                align="justify"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                
              </Typography>
            </CardContent>
            <CardContent className={classes.root}>
              <Typography variant={"h6"} align="center">
                PRICE
              </Typography>
              <Typography align="center">{product.price}&euro;</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={classes.action}>
              <Button
                onClick={addToCart}
                className={classes.btn}
                size="small"
                color="primary"
              >
                {btnText}
              </Button>
            </div>
          </CardActions>
        </Card>
        
      </Grid>
    </>
  );
}
