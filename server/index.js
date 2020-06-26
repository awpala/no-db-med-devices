const express = require('express');
// TO-DO: Add controllers dependencies
const app = express();

app.use(express.json());

// TOD-DO: add controllers endpoints

const portNumber = 5050;
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}`));