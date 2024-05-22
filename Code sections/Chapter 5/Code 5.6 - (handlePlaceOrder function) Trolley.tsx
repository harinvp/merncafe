
const handlePlaceOrder = () => {
    const username = 'globalUser'; // Hardcoded user name
    const orderId = 'MJ' + Math.floor(10000 + Math.random() * 90000); // Random order ID starting with 'MJ'
    const items = trolleyItems.map(item => `${item.title} x ${item.quantity}`); // Extracting item title and quantities from trolley items
    const count = trolleyItems.reduce((total, item) => total + item.quantity, 0); // Total quantity of items in the trolley
    const status = 'confirmed'; // Hardcoded status

    // Construct the order object
    const order = {
      username,
      orderId,
  
    items,
      count,
      price,
      email,
      address,
      status
    };

    // Send a POST request to add the order
    fetch('/api/orders/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Order added successfully:', data);
        setOpenSuccessSnackbar(true);
      })
      .catch(error => {
        console.error('Error adding order:', error);
      });
  };
