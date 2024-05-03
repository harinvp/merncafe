// Importing necessary tools from the react toolbox
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// Importing MUI components for the header UI
import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
// Importing custom components (Catalog, Item, Trolley)
import Catalog from './components/Catalog';
import Trolley from './components /Trolley';
import MyOrders from '. /components/MyOrders';

function App() {
  return (
    <Router>
      <div>
        {/* Material-UI AppBar for the header */}
        <AppBar position="static">
          <Toolbar>
            {/* Logo using the MUI Store icon */}
           <StoreTwoToneIcon fontSize="large" sx={{paddingRight:"10px"}}/>                
              {/* App name */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MilaJo
            </Typography>

            {/* Navigation links */}
            <NavLink to="/ " style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>
              Home
            </ NavLink >
            <NavLink to="/trolley" style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>
              Trolley
            </NavLink >
            <NavLink to="/myorders " style={{ color: 'inherit', textDecoration: 'none' }}>
              My Orders
            </NavLink >
          </Toolbar>
        </AppBar>
        {/* Defining routes and specifying which components to render for each route */}
        <Container>
          <Routes>
            <Route path="/ " element={<Catalog />} />
            <Route path="/trolley" element={<Trolley />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}
// Making the App function available for other parts of the application
export default App;
