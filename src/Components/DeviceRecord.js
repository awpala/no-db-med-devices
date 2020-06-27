import React, { Component } from 'react';

class DeviceRecord extends Component {   
    constructor(props) {
        super(props);
    }
    
    handleQuery = () => {
        // const { device } = this.props;
        // let newDevice = {
        //     name: device.device_name
        // }

        this.props.refreshFn();
    }

    render() {
        // const { device } = this.props;

        // return (
        //     <div onClick={this.handleQuery}>
        //         <p>Name: {device.name}</p>
        //     </div>
        // )

        const { device } = this.props;

        return (
            <div onClick={this.handleQuery}>
                <p>Device Name: {device.device_name}</p>
                <p>
                Definition: 
                    {device.definition.length > 1
                    ? " " + device.definition
                    : " (No definition indicated)"}
                </p>
                <p>Medical Specialty: {device.medical_specialty_description}</p>
                <p>Device Class: {device.device_class.toUpperCase()}</p>
                <p>FDA Product Code: {device.product_code}</p>
                <p>
                Regulation:
                    {device.regulation_number.length > 1
                    ? " 21 CFR " + device.regulation_number
                    : " (No regulation number indicated)"}
                </p>
                <p>Life Sustaining/Supporting? {device.life_sustain_support_flag}</p>
                <p>Implantable? {device.implant_flag}</p>
                <p>GMP Exempt? {device.gmp_exempt_flag}</p>
                <br/>
            </div>
        )
    }
}

export default DeviceRecord;