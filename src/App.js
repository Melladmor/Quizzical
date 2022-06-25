import React, { useEffect, useState } from 'react';
import './App.css';
import Quiz from './component/Quiz';

function App() {

  const [page1, setPage1] = useState(true);

  const [api , setApi]= useState();
  const [question , setQuestion ] = useState(0);
  const [lengthQustion ,setLengthQustion] = useState()
  const [showScore , setShowScore] = useState(false);
  const [score , setScore] = useState(0);
  const [numberQustion ,setNumberQuestion] =useState(5)

  const ckeck =(value)=>{
    const nextQuestion = question +1;
    if(value){
      setScore(score +1)
    }
    if(nextQuestion < lengthQustion){
      setQuestion(nextQuestion);
    }else{
      setShowScore(true)
    }
    
  }


  const start = ()=>{
    setPage1(false);
  }

  const choosenumberQustion = (event)=>{
      var value = event.target.value;
      
      setNumberQuestion(value);

    
  }




  useEffect(()=>{
    fetch(`https://opentdb.com/api.php?amount=${numberQustion}&category=18&difficulty=easy&type=multiple`).then(res => res.json()).then((data)=>{
      setApi(data.results[question])
      setLengthQustion(data.results.length)
    })

  },[question])


  const playAgain = ()=>{
    setQuestion(0);
    setLengthQustion(0);
    setShowScore(false);
    setScore(0);
    setPage1(true)
  }




  return (
    <div className="App">
        <img src="assests/images/blobs.png" alt="img" className="imgTop"/>
        <img src="assests/images/blobs1.png" alt="img" className="imgBottom"/>
        
        {page1 ?<div className="Title">
            <h1>Quizzical</h1>
            <p>Some quick quizz</p>
            <p>Chosse Number of Question</p>
            <select onChange={choosenumberQustion} value={numberQustion} className="selectNumber">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            </select>
            
            <button onClick={start}>Start Quiz</button>
        </div>:
        <div>
          <Quiz data={api} ckeck={ckeck} question={question} length={lengthQustion} showScore={showScore} score={score} playAgain={playAgain}/>
        </div>
        
        }

    </div>
  );
}

export default App;
