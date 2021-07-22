import React from 'react';
import './App.css';
import Cars from './Cars';
import carsContext from './contextApi/carsContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  render() {

    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    return (
      <carsContext.Provider value={ context }>
        <Cars />
      </carsContext.Provider>
    );
  }
}

export default App;
