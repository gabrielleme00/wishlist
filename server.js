const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const views = {
    products: path.join(__dirname, '/public/html/products.html')
};

app.get('/', (req, res) => {
    res.sendFile(views.products);
});

app.get('/wishlist', (req, res) => {
    res.send('Wishlist');
});

app.listen(port, () => {
    console.log(`Listening @ http://localhost:${port}`);
});
