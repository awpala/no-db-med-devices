const axios = require('axios');

module.exports = {
    getDevices: (req, res) => {
        const devicesArray = [];

        // List of specialties
        // (see https://open.fda.gov/apis/device/classification/explore-the-api-with-an-interactive-chart/)
        const deviceSpecialities = [
            "Anesthesiology",
            "Cardiovascular",
            "Clinical", // Original: "Clinical Chemistry"
            "Chemistry", // Original: "Clinical Chemistry"
            "Toxicology", // Original: "Clinical Toxicology"
            "Dental",
            "Ear", // Original: "Ear, Nose, Throat"
            "Nose", // Original: "Ear, Nose, Throat"
            "Throat", // Original: "Ear, Nose, Throat"
            "Gastroenterology", // Original: "Gastroenterology, Urology"
            "Urology", // Original: "Gastroenterology, Urology"
            "General", // Original: "General, Plastic Surgery"
            "Surgery", // Original: "General, Plastic Surgery"
            "Hospital", // Original: "General Hospital"
            "Hematology",
            "Immunology",
            "Genetics", // Original: "Medical Genetics"
            "Microbiology",
            "Neurology",
            "Obstetrics", // Original: "Obstetrics/Gynecology"            
            "Gynecology", // Original: "Obstetrics/Gynecology"
            "Ophthalmic",
            "Orthopedic",
            "Pathology",
            "Physical", // Original: "Physical Medicine"           
            "Medicine", // Original: "Physical Medicine"
            "Radiology",
            "Unknown"
        ]

        // Generate a query array from 9 random specialities
        const devicesLimit = 9;
        const randomDevices = new Array(devicesLimit);

        for(let i = 0; i < randomDevices.length; i++) {
            const randomIndex = Math.floor(Math.random() * deviceSpecialities.length);
            randomDevices[i] = `${deviceSpecialities[randomIndex]}+`;
        }

        // remove last element's +
        randomDevices[randomDevices.length - 1] = randomDevices[randomDevices.length - 1]
        .substring(0, randomDevices[randomDevices.length - 1].length-1);

        // create a query string of 9 random specialities
        const queryString = randomDevices.reduce((acc, device) => acc + device, "");

        // console.log(queryString);

        axios.get(`https://api.fda.gov/device/classification.json?search=medical_specialty_description:${queryString}&limit=${devicesLimit}`)
        .then(results => { 
            devicesArray.push(results.data.results);
            // console.log(results.data.results);

            res.status(200).send(devicesArray);
        })
        .catch(err => res.status(500).send(err));
    }
}