import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    const random = Math.floor(Math.random() * 217);
    console.log(random)
    axios.get(`https://api.adviceslip.com/advice/${random}`)
      .then((response) => {
        var data = JSON.parse(response.data + "}");
        const { advice } = data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
          this.setState({advice: 'Quote could not be found'})
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;