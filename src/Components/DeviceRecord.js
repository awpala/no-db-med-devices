import React from 'react';

// const DeviceRecord = props => {
//     handleQuery = () => {
//         const { device } = props.device;
//         let newDevice = {
//             name: device.device_name
//         }

//         props.refreshFn();
//     }
    
//     return (
//         <div onClick={handleQuery}>
//             <p>Name: {props.device.name}</p>
//         </div>
//     )
// }

class DeviceRecord extends React.Component {   
    handleQuery = () => {
        const { device } = this.props;
        let newDevice = {
            name: device.device_name
        }

        this.props.refreshFn();
    }

    render() {
        const { device } = this.props;

        return (
            <div onClick={this.handleQuery}>
                <p>Name: {device.device_name}</p>
            </div>
        )
    }

}

export default DeviceRecord;