
import { useContext, useEffect, useState } from 'react'
import { TrolleyContext, TrolleyDispatchContext } from "./TrolleyProvider";
import { Grid, TextField, Button, Snackbar, Alert } from '@mui/material';
import DeleteForever from '@mui/icons-material/DeleteForever';
import ImageMapper from './ImageMapper';
import styles from '../styles/Trolley.module.css';

const Trolley = () => {
  const trolleyItems = useContext(TrolleyContext);
  const setTrolleyItems = useContext(TrolleyDispatchContext);
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('');
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);

    useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      trolleyItems.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        totalPrice += price * item.quantity;
      });
      const finalPrice = `$${totalPrice.toFixed(2)}`;
      setPrice(finalPrice);
    }
    calculateTotalPrice();
  }, [trolleyItems]);

  const handlePlaceOrder = () => {
    setOpenSuccessSnackbar(true);
  };

  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar(false);
    if (setTrolleyItems) {
  
    setTrolleyItems([]);
    }
  };
  const handleDeleteItem = (itemId: number) => {
    if (setTrolleyItems) {
      setTrolleyItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }
  };
  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
 const validateAddress = (address: string) => {
    if (!address.trim()) {
      return false;
    }
    return true;
  };
  return (
    <div className={styles.trolleyContainer}>
      {trolleyItems.length === 0 ? (
        <div>
          No items in the Trolley. To add items to your trolley, visit the catalog.
        </div>
      ) : (<>
        <Grid container spacing={2} className={styles.itemsContainer}>
          {trolleyItems.map((item) => (
 
           <Grid item key={item.id} xs={12} sm={12} className={styles.item}>
              <ImageMapper name={item.imageName} width="40" height="40" imageOnly={true} />
              <div className={styles.itemDetails}>
                <div>{item.title}</div>
                <div>
                  Quantity: {item.quantity}
                  {', '}
                  Price: ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                </div>
              </div>
              <DeleteForever onClick={() => handleDeleteItem(item.id)} className={styles.deleteIcon} />
            </Grid>
          ))}
        </Grid>
 <div className={styles.totalPrice}>{price && `Total Amount: ${price}`}</div>        
<TextField
          label="Enter Email"
          variant="outlined"
          required
          fullWidth
          className={styles.emailInput}
          type="email"
          value={email}
        
  onChange={(e) => setEmail(e.target.value)}
          error={!validateEmail(email)}
        />

    <TextField
          label="Enter Shipping Address"
          variant="outlined"
          required
          fullWidth
          className={styles.emailInput}
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          error={!validateAddress(address)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaceOrder}
          className={styles.checkoutButton}
          disabled={!validateAddress(address) && !validateEmail(email)}
        >
          Place Order
        </Button>        
</>
      )}
      <Snackbar open={openSuccessSnackbar} autoHideDuration={6000} onClose={handleCloseSuccessSnackbar}>
 
       <Alert onClose={handleCloseSuccessSnackbar} severity="success" variant="filled" >
          Order successfully placed. You can view the order details from My Orders page.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Trolley;
