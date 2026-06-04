'use strict';

const express = require('express');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

const CATEGORIES = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'];
const ADJECTIVES = ['Premium', 'Professional', 'Classic', 'Modern', 'Eco-Friendly'];

const PRODUCTS = Array.from({ length: 50 }, (_, i) => {
  const id = i + 1;
  const category = CATEGORIES[i % CATEGORIES.length];
  const adjective = ADJECTIVES[Math.floor(i / CATEGORIES.length) % ADJECTIVES.length];
  const price = Math.round((9.99 + id * 4.5) * 100) / 100;
  return {
    id,
    title: `${adjective} ${category} Item ${id}`,
    description: `A high-quality ${category.toLowerCase()} product. Perfect for everyday use. Item number ${id} in our catalog.`,
    price,
    imageUrl: `https://picsum.photos/seed/${id}/400/300`,
  };
});

app.get('/products', async (req, res) => {
  const search = String(req.query.search ?? '').toLowerCase().trim();
  const delay = Math.max(0, Number(req.query.delay) || 0);
  const error = req.query.error === 'true';

  if (delay > 0) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  if (error) {
    return res.status(500).json({ message: 'Simulated server error' });
  }

  const results = search
    ? PRODUCTS.filter(
        p =>
          p.title.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
      )
    : PRODUCTS;

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
  console.log(`GET http://localhost:${PORT}/products?search=electronics`);
  console.log(`GET http://localhost:${PORT}/products?delay=1000`);
  console.log(`GET http://localhost:${PORT}/products?error=true`);
});
