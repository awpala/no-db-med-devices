const savedDevices = [];
let id = 1;

module.exports = {
    getSavedDevices: (req, res) => {
        res.status(200).send(savedDevices);
    },
    saveDevice: (req, res) => {
        const { devices } = req.body.results;

        devices.id = id;
        id++

        savedDevices.push(devices);
        res.status(200).send(savedDevices);
    },
    editNote: (req, res) => {

    },
    deleteDevice: (req, res) => {
        const { id } = req.params;

        const index = savedDevices.findIndex(el => el.id === + id);
        savedDevices.splice(index, 1);

        res.status(200).send(savedDevices);
    }
}