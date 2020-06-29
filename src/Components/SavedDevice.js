import React, {Component} from 'react';

class SavedDevice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            noteInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({noteInput: val})
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing});
    }

    handleEdit = (id) => {
        this.props.editFn(id, this.state.noteInput);
        this.handleToggle();
    }

    render(){
        const { device } = this.props;

        return (
            <div className="saved-device">
                <p><span className="device-field">Device Name:</span> {device.name}</p>
                <p>
                    <span className="device-field">Definition:</span> 
                        {device.definition.length > 1
                        ? " " + device.definition
                        : " (No definition indicated)"}
                </p>
                <p><span className="device-field">Medical Specialty:</span> {device.specialty}</p>
                <p><span className="device-field">Device Class:</span> {device.deviceClass.toUpperCase()}</p>
                <p><span className="device-field">FDA Product Code:</span> {device.productCode}</p>
                <p>
                    <span className="device-field">Regulation:</span>
                        {device.regulationNumber.length > 1
                        ? " 21 CFR " + device.regulationNumber
                        : " (No regulation number indicated)"}
                </p>
                <p><span className="device-field">Life Sustaining/Supporting?</span> {device.isLifeSustaining}</p>
                <p><span className="device-field">Implantable?</span> {device.isImplantable}</p>
                <p><span className="device-field">GMP Exempt?</span> {device.isGmpExempt}</p>
                {this.state.isEditing 
                ? (
                    <div>
                        <input
                            type={"text"}
                            placeholder={'Enter Notes Here'}
                            value={this.state.noteInput}
                            onChange={e => this.handleInput(e.target.value)}
                        />
                        <button onClick={() => this.handleEdit(this.props.device.id)}>Add Note</button>
                    </div>
                )
                : (
                    <div className="user-notes">
                        <p>
                            <span className="notes-field">User Notes:</span>{` ${
                                this.props.device.noteInput
                                ? this.props.device.noteInput
                                : `(No user notes indicated)`
                                }`}
                        </p>
                        <button onClick={this.handleToggle}>Edit Note</button>
                    </div>
                )}
            </div>
        )
    }
}

export default SavedDevice;