import { useEffect, useState } from 'react';
import Flashcard from './Flashcard';
import './App.css';

function App() {

  const flashcards = [
    {
      id: 0,
      question: "React is primarily used to build what?",
      options: [
        "Database",
        "User Interface",
        "Server",
        "API"
      ],
      answer: "User Interface",
    }
    ,
    {
      id: 1,
      question: "React components are updated when ____ changes.",
      options: [
        "State",
        "Props",
        "Variables",
        "Functions"
      ],
      answer: "State",
    }
    ,
    {
      id: 2,
      question: "Which hook is ideal to do an API Fetch request?",
      options: [
        "useState",
        "useRef",
        "useMemo",
        "useEffect"
      ],
      answer: "useEffect",
    }
    ,
    {
      id: 3,
      question: "Which modern CSS layout feature is used for row or column display?",
      options: [
        "flexbox",
        "text-align",
        "float",
        "position"
      ],
      answer: "flexbox"
    }
  ];
  
  const [choices, setChoices] = useState(new Array(flashcards.length).fill(""));

  const choose = (id, choice) => {
    const newChoices = [...choices];
    newChoices[id] = choice;
    setChoices(newChoices);
  }

  //Check if you won the game (all cards are correct)
  useEffect(() => {
    for (let i = 0; i < choices.length; i++) {
      if (flashcards[i].answer !== choices[i]) {
        return;
      }
    }
    alert('You win!');
  }, [choices]);

  return (
    <div id="flashcard-list">
      {flashcards.map((flashcard) => {
        return (
          <Flashcard
            key={flashcard.id}
            id={flashcard.id}
            question={flashcard.question}
            options={flashcard.options}
            answer={flashcard.answer}
            choose={choose}
          />
        )
      })}
    </div>
  );
}

export default App;