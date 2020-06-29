# No-DB Project: openFDA Medical Devices Search App

## Overview

This simple application provides a user interface to access medical device classification data provided by the United States Food and Drug Administration (US FDA). The application provides the ability to query the FDA devices database by `medical speciality description` and/or by `device name` fields. Additionally, devices can be selected to save/retain in the user's Saved List, which also provides the ability to add user notes for reference.

**NOTE**: This application is *not* configured with data persistence via database (i.e., *no* DB/database), therefore, the Saved List of devices will only be retained for the duration of the server port's activity.

## Usage

To use the application, clone the repository files and then issue command `npm install` to install required dependencies, as specified in `package.json`. Then, issue commands `npm start` (default port `3000`) to launch the user App and `nodemon` or equivalent (default port `5050`) to launch the server.

**Principal Dependencies**: `create-react-app`, `axios`, `express`, `node`

## Disclaimer

Data provided courtesy of the United States Food and Drug Administration [openFDA](https://open.fda.gov) API. The information indicated here is without warranty and not intended for the treatment or cure of any medical conditions, symptoms, or diseases. Please consult a qualified licensed and/or certified medical professional in your local regional jurisdiction for further guidance in such matters.
