import '../../styles/App.css'

import React,  { useState } from 'react';


const OpenAiRequester = ({ text, contentType }) => {

  const [sugestions, setSugestions] = useState()
  const handleClick = (event) => {
    setSugestions(event);
  };

  return (
    <>
        <button onClick={handleClick}>Request</button>
        <label>Result</label>
        <textarea rows="15" cols="50" placeholder="Waiting..." value={sugestions}></textarea>
    </>
  );
};

export default OpenAiRequester;