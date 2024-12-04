const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/api', indexRouter);

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});