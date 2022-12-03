const express = require('express');

// Constants
const PORT = 20222; // <ANGKATAN><3 ANGKAT TERAKHIR NIM>
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.json({
    version: "0.1.1"
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});