const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

router.get('/sum', (req, res) => {
  const { num1, num2 } = req.query;
  if (typeof num1 !== 'string' || typeof num2 !== 'string' || isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const sum = parseFloat(num1) + parseFloat(num2);
  res.json({ sum });
});

module.exports = router;