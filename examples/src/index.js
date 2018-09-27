import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '../../src/Button.js';

class App extends Component {
  render() {
    return (
      <div>
        <Button />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));

