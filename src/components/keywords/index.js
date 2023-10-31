import '../../styles/App.css'

import React from 'react';


const Keywords = ({ text, setText }) => {

  const handleChange = (event) => {
    setText(event.target.value);
  };


  return (
    <>
      <label>keywords</label>
      <p>Write the keywords releated to your content</p>
      <textarea rows="15" cols="50" placeholder="Type here..." value={text} onChange={handleChange}></textarea>
    </>
  );
};

export default Keywords;