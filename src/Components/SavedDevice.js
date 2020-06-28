import React, {Component} from 'react';

class SavedDevice extends Component {
    constructor(props) {
        super(props);

        // allows for conditional rendering
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
            <div>
                <p>Device Name: {device.name}</p>
                <p>
                    Definition: 
                        {device.definition.length > 1
                        ? " " + device.definition
                        : " (No definition indicated)"}
                </p>
                <p className="device-description">Medical Specialty: {device.specialty}</p>
                <p>Device Class: {device.deviceClass.toUpperCase()}</p>
                <p>FDA Product Code: {device.productCode}</p>
                <p>
                    Regulation:
                        {device.regulationNumber.length > 1
                        ? " 21 CFR " + device.regulationNumber
                        : " (No regulation number indicated)"}
                </p>
                <p>Life Sustaining/Supporting? {device.isLifeSustaining}</p>
                <p>Implantable? {device.isImplantable}</p>
                <p>GMP Exempt? {device.isGmpExempt}</p>
                {this.state.isEditing 
                ? (
                    <div>
                        <input
                            value={this.state.noteInput}
                            onChange={e => this.handleInput(e.target.value)}
                        />
                        <button onClick={() => this.handleEdit(this.props.device.id)}>Add Note</button>
                    </div>
                )
                : (
                    <div>
                        <p>
                            {`User Notes: ${
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