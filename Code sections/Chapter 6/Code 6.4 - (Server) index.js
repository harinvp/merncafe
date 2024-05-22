

const express = require("express");
const connectDB = require("./db/connection");
const ordersRoutes = require("./routes/orders");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // Import the 'path' module

//Changes-1 start (from Chapter 5, Code 5.5)
const usersRoutes = require("./routes/users");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("./passport");
require("dotenv").config();
//Changes-1 end (from Chapter 5, Code 5.5)

const app = express();

app.use(cors({ origin: true, credentials: true }));

// use the body-parser  to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect Database
connectDB();

//Changes-2 start (from Chapter 5, Code 5.5)
app.use(
  session({
    secret: "RX7b#P2$rLz5@TqY&9FvG3*sCAFE",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.CONN_STRING }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", usersRoutes);
//Changes-2 end (from Chapter 5, Code 5.5)

app.use("/api/orders", ordersRoutes);

// Serve static files from the client/build directory
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// Define route to serve the client's index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () =>

  console.log(`Server running on port ${process.env.PORT}`)
);
