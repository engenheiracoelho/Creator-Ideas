import React, { useState } from 'react';
import '../styles/App.css';

import Select from '../components/select/index.js';
import Keywords from '../components/keywords/index.js';
import OpenAiRequester from '../components/openAiRequester/index.js';

function App() {
  const [contentType, setContentType] = useState("Twitter post");
  const [text, setText] = useState();

  return (
    <div className="App">
      <header></header>
      <body className="App-body">
        <div className="App-form">
          <form>
            <Select setContentType={setContentType} contentType={contentType}/>
            <Keywords text={text} setText={setText} />
            <OpenAiRequester text={text} contentType={contentType} />
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
