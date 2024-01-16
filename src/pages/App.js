import React, { useState } from 'react';
import '../styles/App.css';

import Select from '../components/select/index.js';
import Keywords from '../components/keywords/index.js';
import OpenAiRequester from '../components/openAiRequester/index.js';



function App() {
  const [contentType, setContentType] = useState("Twitter post");
  const [key, setKey] = useState();

  return (
    <>
      <header>
      </header>
      <div className="App-body">
        <div className="App-form">
          <div>
            <Select setContentType={setContentType} contentType={contentType}/>
            <Keywords text={key} setText={setKey} />
            <OpenAiRequester text={key} contentType={contentType} />
          </div>
        </div>
        <div className="App-bar">
          <h1>Idea Oasis</h1>
        </div>
      </div>
    </>
  );
}
export default App;
