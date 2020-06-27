const savedDevices = [];
let id = 1;

module.exports = {
    getSavedDevices: (req, res) => {
        res.status(200).send(savedDevices);
    },
    saveDevice: (req, res) => {
        const { device } = req.body;

        device.id = id;
        id++;

        savedDevices.push(device);
        res.status(200).send(savedDevices);
    },
    editNote: (req, res) => {
        const { id } = req.params;
        const { note } = req.body;

        const index = savedDevices.findIndex(el => el.id === +id);
        savedDevices[index].noteInput = note;

        res.status(200).send(savedDevices);
    },
    deleteDevices: (req, res) => {
        const { id } = req.params;

        const index = savedDevices.findIndex(el => el.id === + id);
        savedDevices.splice(index, 1);

        res.status(200).send(savedDevices);
    }
}