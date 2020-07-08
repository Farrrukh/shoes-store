import React from "react";
import ProductList from "./ProductList"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
home: {
    
    marginTop:'3%'
},
logo:{
  width:320,
  display:'block',
  margin:'auto',
  marginTop:10
},
welcome:{
marginBottom:'2%'
}
}));

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.home}>
        <ProductList/>
    </div>
  );
}