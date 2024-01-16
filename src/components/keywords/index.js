import React from 'react';

import '../../styles/App.css'


const Keywords = ({ text, setText }) => {
  //TO-DO: UI Test
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