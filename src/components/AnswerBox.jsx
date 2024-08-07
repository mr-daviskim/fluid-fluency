import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";

const AnswerBox = ({checkAnswer}) => {
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkAnswer(inputValue)) {
      setFeedback('Correct! Generating a new problem...');
      setInputValue(''); // Clear the input field
    } else {
      setFeedback('Incorrect, try again.');
      setInputValue(''); // Clear the input field
    }
  };


  return (
    //contains links (navbar?) to the other components.
    //navbar will contain inventory, map, notebook, playerstats (the players icon will lead them to the playerstats page), and settings
    <div>
      <form onSubmit={handleSubmit}>
      <label>Answer: <input name="mathFactInput" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
      </label>
      <button type="submit">Submit</button>
      </form>
      <p>Current Input Value: {inputValue}</p>
      <p>{feedback}</p>
      </div>
    
  );
};

export default AnswerBox;
