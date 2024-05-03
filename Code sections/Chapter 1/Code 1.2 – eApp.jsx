import React, { useState } from "react";

function App() {
  const [poloCount, setPoloCount] = useState(0);
  const [price, setPrice] = useState(0);
  const addToCart = () => {
    setPoloCount(poloCount + 1);
    setPrice(price + 10);
  };

  return (
    <div>
      <h1>John & Mila (React)</h1>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={addToCart}>Add Polo to cart</button>
      </div>
      <ul>
        <li>{`${poloCount} Polos`}</li>
        <li>{`${price} AUD`}</li>
      </ul>
    </div>
  );
}
export default App;
