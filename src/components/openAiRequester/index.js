import '../../styles/App.css'

import React,  { useState } from 'react';
import { requestOpenAi } from '../../anti_corruption_layer/adapter.js';
import ReactGA from 'react-ga';

const OpenAiRequester = ({ text, contentType }) => {
  //TO-DO: UI Test
  const [sugestions, setSugestions] = useState()

  const handleClick = async () => {
    const prompt =  `Considering the keywords: ${text}, suggest a new idea with the type of ${contentType}`
    const w = await requestOpenAi(prompt);
    setSugestions(w.choices[0].text);

    ReactGA.event({
      category: 'User',
      action: `Request a content sugestion with (${text}) keywords.`,
      nonInteraction: false
    });
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