//Import MUI component/s
import { Grid } from '@mui/material';

//Import Item component
import Item from './Item';

// Import CSS modules
import styles from "../styles/Catalog.module.css";

//Imports for Trolley badges
import { Badge } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TrolleyContext } from "./TrolleyProvider";


// Set of products
const products = [
  { id: 1, title: "Ferragamo BOXYZ bag", desc: "The Ferragamo BOXYZ bag in vibrant orange is a timeless accessory suitable for any occasion with its sleek leather construction.", imageName: "handbagOrange", price: "$45.78" },
  { id: 2, title: "Black Michael Kors Tote Bag", desc: "Chic and versatile, this Michael Kors tote in classic black is perfect for both office and evening wear.", imageName: "handbagBlack", price: "$43.50" },
  { id: 3, title: "Diamond Ring", desc: "This exquisite piece features a silver band that elegantly holds a multi-stone diamond setting", imageName: "ring", price: "$923.00" },
  { id: 4, title: "Classic Brown Handbag", desc: "Elegant in simplicity, this brown handbag pairs well with any outfit, making it a must-have staple.", imageName: "handbagBrown", price: "$49.99" },
  { id: 5, title: "Ocean Blue Heels", desc: "Make a statement with these striking blue heels, perfect for adding a pop of color to your ensemble.", imageName: "shoesBlue", price: "$85.00" },
  { id: 6, title: "Pink Ballet Flats", desc: "These charming pink ballet flats offer comfort without sacrificing style, ideal for daily wear.", imageName: "shoesPink", price: "$59.99" },
  { id: 7, title: "Purple Suede Loafers", desc: "These luxurious purple suede loafers are the epitome of casual elegance.", imageName: "shoesPurple", price: "$75.00" },
  { id: 8, title: "Vintage Brown Watch", desc: "A timeless accessory, this vintage-style watch features a rich brown leather strap.", imageName: "watchBrown", price: "$110.00" },
  { id: 9, title: "Emerald Green Timepiece", desc: "This watch boasts a stunning emerald green face, set in a sleek silver casing for modern sophistication.", imageName: "watchGreen", price: "$250.00" },
  { id: 10, title: "Sunny Yellow Watch", desc: "Brighten your day with this cheerful yellow watch, a perfect blend of fun and functionality.", imageName: "watchYellow", price: "$99.00" }
];


function Catalog() {

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
