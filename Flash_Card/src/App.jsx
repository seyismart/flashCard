import { useState } from 'react'

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}


let questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
    "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  
  function handleClick(id){
    setSelectedId(id != selectedId ? id : null);
    
  }

  const DeleteBlog = (id) => {
 const blog = questions.filter(newBlog => newBlog.id !== id);
setMe(blog);

  }

return( <div className='flashcards'>
    {questions.map(blog => 
    <div key={blog.id} className={blog.id === selectedId ? "selected" : ""} 
    onClick={() => handleClick(blog.id)}> <p>
      {blog.id === selectedId ? blog.answer : blog.question}
      </p>
      <button onClick={()=> {
        DeleteBlog(blog.id) 
      }}>Delete Blog</button>
      </div>
    
    )}
  </div>
)
}
