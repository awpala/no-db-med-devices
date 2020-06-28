import React, { Component } from 'react';

class DeviceRecord extends Component {   
    handleQuery = () => {
        const { device } = this.props;
        let newDevice = {
            name: device.device_name,
            definition: device.definition,
            specialty: device.medical_specialty_description,
            deviceClass: device.device_class,
            productCode: device.product_code,
            regulationNumber: device.regulation_number,
            isLifeSustaining: device.life_sustain_support_flag,
            isImplantable: device.implant_flag,
            isGmpExempt: device.gmp_exempt_flag
        }

        this.props.saveFn(newDevice);
    }

    render() {
        const { device } = this.props;

        return (
            <div className='queried-device' onClick={this.handleQuery}>
                <p>Device Name: {device.device_name}</p>
                <p>
                    Definition: 
                        {device.definition.length > 1
                        ? " " + device.definition
                        : " (No definition indicated)"}
                </p>
                <p className="device-description">Medical Specialty: {device.medical_specialty_description}</p>
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
            </div>
        )
    }
}

export default DeviceRecord;