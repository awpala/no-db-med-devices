import React, {Component} from 'react';
import axios from 'axios';
import DeviceRecord from './DeviceRecord';

class DeviceSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            queriedDevices: []
        }
    }

    componentDidMount() {
        this.getQueriedDevices();
    }

    getQueriedDevices = () => {
        axios.get('/api/fda-devices')
        .then(res => {
            this.setState({queriedDevices: res.data})
        })
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.queriedDevices);
        const mappedQueriedDevices = this.state.queriedDevices.map(
            (device, index) => (
            <DeviceRecord
                key={index}
                device={device}
                saveFn={this.props.saveFn}
                // refreshFn={this.getQueriedDevices}
            />
        ));

        return (
            <div className="search-module">
                <h2>{'Search device by medical specialty and/or by name'}</h2>
                <div>
                    <input
                        type={"text"}
                        placeholder={'Enter Medical Specialty'}
                    />
                    <input
                        type={"text"}
                        placeholder={'Enter Device Name'}
                    />
                    <button>
                        Search
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