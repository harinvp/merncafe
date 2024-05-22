
import { useContext, useState } from 'react';
import { Card, CardContent, Typography, Button, Snackbar, Alert } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from '../styles/Item.module.css';
import ImageMapper from './ImageMapper';

//Import Contexts
import { TrolleyContext, TrolleyDispatchContext } from "./TrolleyProvider";

interface Product {
  id: number;

  title: string;
  desc: string;
  imageName: string;
  price: string;
}

function Item(props: Product) {
  const { id, title, desc, imageName, price } = props;
  const trolleyItems = useContext(TrolleyContext);
  const setTrolleyItems = useContext(TrolleyDispatchContext);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  // Function to add item to trolley
  const addToTrolley = (product: Product) => {
    if (setTrolleyItems) {
      setTrolleyItems(prevItems => {
        const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
        if (existingItemIndex !== -1) {
          // Item already exists, update the count
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += 1;
    
      setSnackbarMessage(`${title} is updated in trolley`);
          setSnackbarOpen(true);
          return updatedItems;
        } else {
          // Item doesn't exist, add it to the trolley
          const newItem = { ...product, quantity: 1 };
          setSnackbarMessage(`${title} is added to trolley`);
          setSnackbarOpen(true);
          return [...prevItems, newItem];
        }
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Close snackbar
  };

  return (
    <TrolleyContext.Provider value={trolleyItems}>
      <Card className={styles.card} key={id}>
        <ImageMapper name={imageName} width="350" height="250" />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
  
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={styles.itemDesc} style={{ height: '80px' }}>
            {desc}
          </Typography>
          <Typography variant="h6" component="div" className={styles.price}>
            {price}
          </Typography>
          <Button variant="contained" onClick={() => addToTrolley(props)} endIcon={<AddShoppingCartIcon />}>
            Add to Trolley
          </Button>
        </CardContent>
      </Card>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert variant="filled" onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </TrolleyContext.Provider>
  );
}
export default Item;
