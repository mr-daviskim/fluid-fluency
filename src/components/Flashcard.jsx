import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import mathFacts from "./mathFacts.json";
import AnswerBox from "./AnswerBox";

const Flashcard = () => {
  const [mathFact, setMathFact] = useState('');
  const [mathFactAnswer, setMathFactAnswer] = useState('');

  useEffect(() => {
    generateNewFact();
  }, []);

  // Function to generate a new math fact
  const generateNewFact = () => {
    const chooseNum = Math.floor(Math.random() * 12) + 1;
    const chooseNumString = chooseNum.toString();
    
    const data = JSON.stringify(mathFacts.multiplication);
    const parsedData = JSON.parse(data);
    const fact = parsedData[chooseNumString][chooseNum].expression;
    const answer = parsedData[chooseNumString][chooseNum].result;
    
    setMathFact(fact);
    setMathFactAnswer(answer);
  };

 // Function to check the answer
  const checkAnswer = (inputValue) => {
    const isCorrect = inputValue === mathFactAnswer.toString();
    if (isCorrect) {
      generateNewFact(); // Generate a new fact if the answer is correct
    }
    return isCorrect;
  };

  return (
    //contains links (navbar?) to the other components.
    //navbar will contain inventory, map, notebook, playerstats (the players icon will lead them to the playerstats page), and settings
    <div>{mathFact}
    <AnswerBox checkAnswer={checkAnswer}></AnswerBox></div>
  );
};

export default Flashcard;
