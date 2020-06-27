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
            <div className="device-flex">
                {mappedQueriedDevices}
            </div>   
        )
    }
}

export default DeviceSearch;