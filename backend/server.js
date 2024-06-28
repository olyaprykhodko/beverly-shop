import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  product
    ? res.send(product)
    : res.status(404).send({ message: 'Product Not Found' });
  res.send(data.products);
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`server at PORT ${port} works`);
});
