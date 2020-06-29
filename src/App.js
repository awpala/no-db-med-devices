import React, { Component } from 'react';
import Header from './Components/Header';
import DeviceSearch from './Components/DeviceSearch';
import SavedList from './Components/SavedList';
import Footer from './Components/Footer';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedDevices: []
    };

    this.saveDevice = this.saveDevice.bind(this);
  }

  componentDidMount() {
    axios.get('/api/saved-devices')
    .then(res => {
      this.setState({savedDevices: res.data})
    })
    .catch(err => console.log(err));
  }

  saveDevice(device) {
    axios.post('api/saved-devices', { device })
    .then(res => {
      this.setState({savedDevices: res.data})
    })
    .catch(err => console.log(err));
  }

  editNote = (id, newNote) => {
    let body = {note: newNote};

    axios.put(`/api/saved-devices/${id}`, body)
    .then(res => {
      this.setState({savedDevices: res.data})
    })
    .catch(err => console.log(err));
  }

  deleteDevices = () => {
    axios.delete(`/api/saved-devices`)
    .then(res => {
      this.setState({savedDevices: res.data})
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <Header className="header" />
          <main>
            <DeviceSearch
              className="device-search"
              saveFn={this.saveDevice}
            />
            <SavedList
              className="saved-list"
              savedDevices={this.state.savedDevices}
              editFn={this.editNote}
              deleteFn={this.deleteDevices}
            />
          </main>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
