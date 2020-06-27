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


  render() {
    return (
      <div className="App">
        <Header />
        <DeviceSearch
          className="QueriedDevices"
          saveFn={this.saveDevice}
        />
        <SavedList
          savedDevices={this.state.savedDevices}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
