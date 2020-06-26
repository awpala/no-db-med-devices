const express = require('express');
// TO-DO: Add controllers dependencies
const deviceCtrl = require('./controllers/deviceCtrl');
const app = express();

app.use(express.json());

// openFDA devices endpoint
app.get('/api/fda-devices', deviceCtrl.getDevices);

// TOD-DO: Add saved devices controllers endpoints

const portNumber = 5050;
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}`));