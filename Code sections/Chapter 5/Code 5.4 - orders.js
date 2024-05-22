
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

//Insert Order
router.post("/add", (req, res) => {
  Order.create(req.body)
    .then((order) => res.json({ msg: "Order added successfully", order }))
    .catch((err) =>

      res.status(400).json({ error: `Unable to add this order ${err}` })
    );
});

// Get all orders by username
router.get("/user/:username", authenticate, (req, res) => {
  const username = req.params.username;
  Order.find({ username: username })
    .then((orders) => {
      if (!orders || orders.length === 0) {
        return res
          .status(404)
          .json({ notFound: "No Orders found for this user" });
      }
      res.json(orders);
    })
    .catch((err) => res.status(500).json({ error: `Server Error: ${err}` }));
});

module.exports = router;
