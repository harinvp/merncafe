{/* Navigation links */}
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
</NavLink>
