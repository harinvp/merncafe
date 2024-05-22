
import { Grid } from '@mui/material';
import Item from './Item';
import styles from "../styles/Catalog.module.css";

//New - Imports for Trolley badges
import { Badge } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TrolleyContext } from "./TrolleyProvider";
// Set of products
const products = [];
//keep the products here as in the code listing in Chapter 3 (Code 3.6)




function Catalog() {

  //New - declarations
  const navigate = useNavigate();
  const trolleyItems = useContext(TrolleyContext);

  return (
    <>
      <Grid container className={styles.catalogContainer} spacing={2} rowGap={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={3} md={4}>
            <Item
              id={product.id}
              title={product.title}
              desc={product.desc}
              imageName={product.imageName}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>

      <div className={styles.trolleyIconContainer}>
        <Badge badgeContent={trolleyItems.reduce((total, item) => total + item.quantity, 0)} color="success" overlap="circular" onClick={() => navigate('/trolley')} >
          <ShoppingCartCheckoutIcon className={styles.trolleyIcon} />
        </Badge>
      </div>
    </>
  );
}

export default Catalog;

