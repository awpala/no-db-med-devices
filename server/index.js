const express = require('express');
const deviceCtrl = require('./controllers/deviceCtrl');
const savedCtrl = require('./controllers/savedCtrl');
const app = express();

app.use(express.json());

// openFDA devices endpoint
app.get('/api/fda-devices', deviceCtrl.getDevices);

// Saved devices endpoints
app.get('/api/saved-devices', savedCtrl.getSavedDevices);
app.post('/api/saved-devices', savedCtrl.saveDevice);
app.put('/api/saved-devices/:id', savedCtrl.editNote);
app.delete('/api/saved-devices', savedCtrl.deleteDevices);

const portNumber = 5050;
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}`));