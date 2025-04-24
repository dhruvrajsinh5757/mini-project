const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let transactions = [];

// Routes
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.post('/api/transactions', (req, res) => {
  const transaction = {
    id: Date.now(),
    ...req.body,
    date: new Date()
  };
  transactions.push(transaction);
  res.json(transaction);
});

app.delete('/api/transactions/:id', (req, res) => {
  transactions = transactions.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: 'Deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000')); 