import React, { useState } from 'react';
import ReactGA from 'react-ga';

const Select = ({ setContentType }) => {

    const [selectedOption, setSelectedOption] = useState('Articles');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      setContentType(selectedOption)

      ReactGA.event({
        category: 'User',
        action: 'Select Content type',
        nonInteraction: false
      });
    };

  return (
    <>
      <label>Content type </label>
      <select value={selectedOption} onChange={handleChange}>
        <option value="Articles" defaultChecked>Articles</option>
        <option value="Blog posts">Blog posts</option>
        <option value="Educational videos">Educational videos</option>
        <option value="Podcasts">Podcasts</option>
        <option value="Infographics and data visualizations">Infographics and data visualizations</option>
        <option value="Twitter post">Twitter post</option>
        <option value="Linkedin post">Linkedin post</option>
        <option value="Facebook post">Facebook post</option>
        <option value="E-book">E-book</option>
        <option value="Newsletter">Newsletter</option>
        <option value="Presentation">Presentation</option>
      </select>
    </>
  );
};

export default Select;