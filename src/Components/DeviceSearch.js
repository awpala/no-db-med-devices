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
        console.log(this.state.queriedDevices);
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
                // refreshFn={this.getQueriedDevices}
            />
        ));
        // }
        console.log(this.state.queriedDevices);

        return (
            <div className="queried-devices">
                <h2>{'Search Device by Medical Specialty and/or by Name'}</h2>
                <div>
                    <input
                        value={'Enter Medical Specialty'}
                    />
                    <input
                        value={'Enter Device Name'}
                    />
                    <button>
                        Search
                    </button>
                </div>
                <h2>{`Click record(s) to save to list`}</h2>
                {mappedQueriedDevices}
            </div>   
        )
    }
}

export default DeviceSearch;