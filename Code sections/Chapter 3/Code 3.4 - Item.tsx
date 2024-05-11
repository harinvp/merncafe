import { Card, CardContent, Typography, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from '../styles/Item.module.css';
import ImageMapper from './ImageMapper';

//product specifications
interface Product {
  id: number;
  title: string;
  desc: string;
  imageName: string;
  price: string;
}
function Item(props: Product) {
  const { id, title, desc, imageName, price } = props;
  return (
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
        <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
          Add to Trolley
        </Button>
      </CardContent>
    </Card>
  );
}
export default Item;
