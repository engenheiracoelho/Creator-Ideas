import React, { useState } from 'react';

import { requestContentIdeas } from '../../hooks/openAiConnection.js';
import '../../styles/App.css'

const OpenAiTextBox = ({ contentType }) => {
  const [keywords, setKeywords] = useState();

  const handleChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await requestContentIdeas(keywords, contentType);
    setKeywords(result.replace(/\s+/g, ' '));
  };

  return (
    <>
      <label>keywords</label>
      <p>Write the keywords releated to your content</p>
      <textarea rows="15" cols="50" placeholder="Type here..." value={keywords} onChange={handleChange}></textarea>
      <div style={{display:"flex", alignItems:"center"}}>
        <button onClick={handleClick} id="Request" value="Request">Request ideas</button>
      </div>
    </>
  );
};

export default OpenAiTextBox;