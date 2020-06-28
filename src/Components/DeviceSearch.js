import React, {Component} from 'react';
import axios from 'axios';
import DeviceRecord from './DeviceRecord';

class DeviceSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            queriedDevices: [],
            specialtyQuery: "",
            nameQuery: ""
        }
    }

    componentDidMount() {
        this.getQueriedDevices();
    }

    getQueriedDevices = () => {
        const { specialtyQuery, nameQuery } = this.state;

        axios.get(`/api/fda-devices/?specialtyQuery=${specialtyQuery}&nameQuery=${nameQuery}`)
        .then(res => {
            this.setState({queriedDevices: res.data});
        })
        .catch(err => console.log(err));
    }

    clearSearch = () => {
        this.setState({
            specialtyQuery: "",
            nameQuery: ""
        })
    }

    handleSpecialtyInput = (val) => {
        this.setState({specialtyQuery: val});
    }

    handleNameInput = (val) => {
        this.setState({nameQuery: val});
    }

    render() {
        const mappedQueriedDevices = this.state.queriedDevices.map(
            (device, index) => (
            <DeviceRecord
                key={index}
                device={device}
                saveFn={this.props.saveFn}
            />
        ));

        return (
            <div className="search-module">
                <h2>{'Search device by medical specialty and/or by name'}</h2>
                <div>
                    <input
                        type={"text"}
                        placeholder={'Enter Medical Specialty'}
                        value={this.state.specialtyQuery}
                        onChange={e => this.handleSpecialtyInput(e.target.value)}
                    />
                    <input
                        type={"text"}
                        placeholder={'Enter Device Name'}
                        value={this.state.nameQuery}
                        onChange={e => this.handleNameInput(e.target.value)}
                    />
                    <button onClick={this.getQueriedDevices}>
                        Search
                    </button>
                    <button onClick={this.clearSearch}>
                        Clear Search
                    </button>
                </div>
                <h2>{`Click device record(s) to save to list`}</h2>
                <div className="queried-devices">
                    {mappedQueriedDevices}
                </div>
            </div>   
        )
    }
}

export default DeviceSearch;