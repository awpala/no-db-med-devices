const axios = require('axios');

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
    "Plastic", // Original: "General, Plastic Surgery"            
    "Surgery", // Original: "General, Plastic Surgery"
    "Hospital", // Original: "General Hospital"
    "Hematology",
    "Immunology",
    "Medical", // Original: "Medical Genetics"
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

const devicesLimit = 9;

module.exports = {
    getDevices: (req, res) => {
        let { specialtyQuery, nameQuery } = req.query;

        if( specialtyQuery === "undefined" ) {
            specialtyQuery = undefined;
        }
        if( nameQuery === "undefined" ) {
            nameQuery = undefined;
        }

        const devicesArray = [];
        
        console.log(specialtyQuery, nameQuery);

    // Generate random query string if no search terms provided
        if(!specialtyQuery && !nameQuery) {
            // Generate a query array from 9 random specialities
            const randomDevices = new Array(devicesLimit);

            for(let i = 0; i < randomDevices.length; i++) {
                const randomIndex = Math.floor(Math.random() * deviceSpecialities.length);
                randomDevices[i] = `${deviceSpecialities[randomIndex]}+`;
            }

            // remove last element's terminal "+" artifact post-for loop
            randomDevices[randomDevices.length - 1] = randomDevices[randomDevices.length - 1]
            .substring(0, randomDevices[randomDevices.length - 1].length-1);

            // create a query string of 9 random specialities
            const queryString = randomDevices.reduce((acc, device) => acc + device, "");

            console.log(queryString);
        
            axios.get(`https://api.fda.gov/device/classification.json?search=medical_specialty_description:${queryString}&limit=${devicesLimit}`)
            .then(queryOutput => { 
                let resultsArray = queryOutput.data.results;

                for(device of resultsArray) {
                    devicesArray.push(device);
                }

                res.status(200).send(devicesArray);
            })
            .catch(err => res.status(500).send(err));
        } 
            
        // Otherwise, search by specialty and by name
        else if (specialtyQuery && nameQuery) {
            // parse query strings to replace spaces with "+" using regex
            // (reference: https://stackoverflow.com/questions/3794919/replace-all-spaces-in-a-string-with)
            specialtyQuery = specialtyQuery.replace(/\s/g, '+').toUpperCase();
            nameQuery = nameQuery.replace(/\s/g, '+').toUpperCase();

            console.log(specialtyQuery, nameQuery);

            axios.get(`https://api.fda.gov/device/classification.json?search=device_name:${nameQuery}+AND+medical_specialty_description:${specialtyQuery}&limit=${devicesLimit}`)
            .then(queryOutput => { 
                let resultsArray = queryOutput.data.results;

                for(device of resultsArray) {
                    devicesArray.push(device);
                }

                res.status(200).send(devicesArray);
            })
            .catch(err => res.status(500).send(err));
        }
        
        // Else, search by specialty or by name
        else if (specialtyQuery || nameQuery) {
            // parse applicable query strings to replace spaces with "+"
            if(specialtyQuery && !nameQuery) {
                specialtyQuery = specialtyQuery.replace(/\s/g, '+').toUpperCase();

                console.log(specialtyQuery);

                axios.get(`https://api.fda.gov/device/classification.json?search=medical_specialty_description:${specialtyQuery}&limit=${devicesLimit}`)
                .then(queryOutput => { 
                    let resultsArray = queryOutput.data.results;
    
                    for(device of resultsArray) {
                        devicesArray.push(device);
                    }
    
                    res.status(200).send(devicesArray);
                })
                .catch(err => res.status(500).send(err));
            }
            else if (nameQuery && !specialtyQuery) {
                nameQuery = nameQuery.replace(/\s/g, '+').toUpperCase();    

                console.log(nameQuery);
                
                axios.get(`https://api.fda.gov/device/classification.json?search=device_name:${nameQuery}&limit=${devicesLimit}`)
                .then(queryOutput => { 
                    let resultsArray = queryOutput.data.results;
    
                    for(device of resultsArray) {
                        devicesArray.push(device);
                    }
    
                    res.status(200).send(devicesArray);
                })
                .catch(err => res.status(500).send(err));
            }
        }
    }
}