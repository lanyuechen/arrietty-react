import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AioDemo from './pages/all-in-one';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AioDemo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));