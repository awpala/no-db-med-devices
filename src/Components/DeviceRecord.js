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
            <div className='device-record' onClick={this.handleQuery}>
                <p><span className='device-field'>Device Name:</span> {device.device_name}</p>
                <p>
                    <span className="device-field">Definition:</span> 
                        {device.definition.length > 1
                        ? " " + device.definition
                        : " (No definition indicated)"}
                </p>
                <p className="device-description"><span className="device-field">Medical Specialty:</span> {device.medical_specialty_description}</p>
                <p><span className="device-field">Device Class:</span> {device.device_class.toUpperCase()}</p>
                <p><span className="device-field">FDA Product Code:</span> {device.product_code}</p>
                <p>
                    <span className="device-field">Regulation:</span>
                        {device.regulation_number.length > 1
                        ? " 21 CFR " + device.regulation_number
                        : " (No regulation number indicated)"}
                </p>
                <p><span className="device-field">Life Sustaining/Supporting?</span> {device.life_sustain_support_flag}</p>
                <p><span className="device-field">Implantable?</span> {device.implant_flag}</p>
                <p><span className="device-field">GMP Exempt?</span> {device.gmp_exempt_flag}</p>
            </div>
        )
    }
}

export default DeviceRecord;