import { useState, useEffect } from 'react';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [questions, setQuestions] = useState(null);

  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  function deleteBlog(id) {
    // Filter out the question with the specified ID
    const updatedQuestions = questions.filter(question => question.id !== id);
    setQuestions(updatedQuestions);
  }

  
  const [name, setName] = useState('mario')
 useEffect(()=>{
fetch('http://localhost:8000/blogs')
.then(response => response.json())
.then(result => console.log(result)
);

});

  
  
//empty depencies makes us render the useffect function once 

  return (
    <div className='flashcards'>
      {/* {questions.map(blog => 
        <div key={blog.id} className={blog.id === selectedId ? "selected" : ""} 
          onClick={() => handleClick(blog.id)}>
          <p>
            {blog.id === selectedId ? blog.answer : blog.question}
          </p>
          <button onClick={() => {
           
            deleteBlog(blog.id);
          }}>
            Delete Blog
          </button>
       <button onClick={() => {setName('Amanuel')}}>Click to change name</button>
       {name}
        </div>
      )} */}
     <p>this is the original name {name}</p>
    </div>
  );
}

