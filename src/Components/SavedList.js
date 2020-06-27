import React from 'react';
import SavedDevice from './SavedDevice';

const SavedList = props => {
    const mappedList = props.savedDevices.map((device, index) => (
        <SavedDevice
            key={index}
            device={device}
            editFn={props.editFn}
        />
    ))

    return (
        <div>
            <h2>{`Your saved device(s)`}</h2>
            <button onClick={() => props.deleteFn()}>Clear List</button>
            {mappedList
                ?<div>{mappedList}</div>
                : null}    
        </div>
    )
}

export default SavedList;