import React from 'react';
import './App.css';

import Row from './components/Row/Row';

function App() {
  return (
    <div className="App">
        <Row title="Netflix Originals" />
        <Row title="Trending Now" />
    </div>
  );
}

export default App;
