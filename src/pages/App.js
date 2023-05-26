import React, { useState } from 'react';
import '../styles/App.css';

import Select from '../components/select/index.js';

function App() {
  const [selectedTextType, setSelectedTextType] = useState("Twitter post");

  return (
    <div className="App">
      <header></header>
      <body className="App-body">
        <div className="App-form">
          <form>
            <Select setSelectedTextType={setSelectedTextType}/>
          </form>
        </div>
        <div className="App-bar">
          <h1>Idea Oasis</h1>
        </div>
      </body>
    </div>
  );
}
export default App;
