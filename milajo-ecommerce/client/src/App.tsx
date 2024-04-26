// Importing necessary tools from the react toolbox
import { Routes, Route, NavLink } from 'react-router-dom';
// Importing MUI components for the header UI
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';

// Importing custom components (Catalog, Item, Trolley)

import Catalog from './components/Catalog';
import Trolley from './components/Trolley';
import MyOrders from './components/MyOrders';
import TrolleyProvider from "./components/TrolleyProvider";

// Import CSS modules
import appStyles from "./App.module.css";
import Login from './components/Login';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import { AuthContext, AuthDispatchContext } from "./components/AuthProvider";

function App() {
  const navigate = useNavigate();
  const loggedInUser = useContext(AuthContext);
  const setLoggedInUser = useContext(AuthDispatchContext);
  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Handle successful logout

        if (setLoggedInUser) {
          setLoggedInUser("");
        }
        // Redirect to login page
        navigate('/');
      } else {
        console.error('Failed to logout:');
      }
    } catch (error) {
      // Handle error
      console.error('Failed to logout:', error);
    }
  }
  return (

    <TrolleyProvider>
      <div>

        <AppBar position="static">
          <Toolbar>
            <StoreTwoToneIcon fontSize="large" sx={{ paddingRight: "10px" }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MilaJo
            </Typography>
            {loggedInUser && <>
              <p className={appStyles.welcomeMsg}>Hi {loggedInUser}! Checkout our latest trends.</p>
              <NavLink className={({ isActive }) =>
                `${appStyles.menuLink} ${isActive ? appStyles.activeLink : ""}`
              } to="/catalog" >
                Home
              </NavLink>
              <NavLink className={({ isActive }) =>
                `${appStyles.menuLink} ${isActive ? appStyles.activeLink : ""}`
              } to="/trolley">
                Trolley
              </NavLink>
              <NavLink className={({ isActive }) =>
                `${appStyles.menuLink} ${isActive ? appStyles.activeLink : ""}`
              } to="/myorders" >
                My Orders
              </NavLink> <Button type="submit" variant="contained" color="primary" className={appStyles.btn} onClick={handleLogout}>
                <Logout className={appStyles.btnIcon} />Logout
              </Button></>
            }

          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/trolley" element={<Trolley />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
        </Container>
      </div>
    </TrolleyProvider>
  );
}

export default App;
