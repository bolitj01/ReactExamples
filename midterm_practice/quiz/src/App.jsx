import './App.css';

function App() {

  //Quiz questions
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

  return (
    <div id="flashcard-list">
      
    </div>
  );
}

export default App;