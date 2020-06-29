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
        <section className="saved-module">
            <section className="saved-heading">
                <h2>{`Your saved device(s) list`}</h2>
                <button className="clear-saved" onClick={() => props.deleteFn()}>Clear List</button>
            </section>
            {mappedList
                ?<section className="saved-devices">{mappedList}</section>
                : null}
        </section>
    )
}

export default SavedList;