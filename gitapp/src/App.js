import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      user: '',
      followers: []
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/dalgobbopat')
    .then(response => {
      console.log(response.data);
    })
  }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
};





export default App;
