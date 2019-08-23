const express = require("express");
const products = require("../products.json");
const app = express();
getProducts = require("./getProducts");
getProduct = require("./getProduct");
const port = 5000;



app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});