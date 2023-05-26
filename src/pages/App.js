import React, { useState } from 'react';
import '../styles/App.css';

import Select from '../components/Select/index.js';
import OpenAiTextBox from '../components/openAiTextBox/index.js';

function App() {
  const [contentType, setContentType] = useState("Twitter post");

  return (
    <div className="App">
      <header></header>
      <body className="App-body">
        <div className="App-form">
          <form>
            <Select setContentType={contentType}/>
            <OpenAiTextBox contentType={contentType}/>
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
