import React from 'react';
import SavedDevice from './SavedDevice';

const SavedList = props => {
    const mappedList = props.savedDevices.map((device, index) => (
        <SavedDevice
            key={index}
            device={device}
        />
    ))

    return (
        <div>
            <h2>{`Saved Device(s)`}</h2>
            <div>
                {mappedList}                
            </div>
        </div>
    )
}

export default SavedList;