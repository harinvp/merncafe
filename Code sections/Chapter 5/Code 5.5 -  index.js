
const express = require("express");
const connectDB = require("./db/connection");
const ordersRoutes = require("./routes/orders");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // Import the 'path' module

const app = express();

app.use(cors({ origin: true, credentials: true }));

// use the body-parser  to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/orders", ordersRoutes);

// Connect Database
connectDB();

// Serve static files from the client/build directory
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Define route to serve the client's index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
