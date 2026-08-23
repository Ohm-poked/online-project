const express = require('express');
const router = express.Router(); // 👈 This is a mini-app just for tracking these routes!

// Move your data structure here
let currentOrders = [
    { customer: "Alex", items: ["Laptop", "Mouse"] },
    { customer: "Ben",  items: ["Keyboard", "Desk Mat", "Monitor"] },
    { customer: "Chloe", items: ["Headphones"] }
];

// This now handles the base path. It looks like "/" here,
// but app.js will automatically prefix it with "/orders" later!
router.get('/', (req, res) => {
    res.json(currentOrders);
});

// This route catches data sent TO the server
router.post('/add', (req, res) => {
    const newIncomingOrder = req.body; // 👈 Grabs the data sent by the user

    // Add the new order to our currentOrders list array
    currentOrders.push(newIncomingOrder);

    // Send a success message back to the user
    res.json({ 
        message: "Order added successfully!", 
        updatedList: currentOrders 
    });
});


// 👈 Export the mini-app so app.js can import and read it
module.exports = router; 
