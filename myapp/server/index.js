const express = require('express');
const path = require('path');


const PORT = 3000;
const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));


app.listen(PORT, () => {
  console.log(`Server is Up on localhost:${PORT}`);
})