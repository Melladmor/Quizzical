import React from "react";
import {nanoid} from 'nanoid'
const Quiz = ({data,ckeck,question,length ,showScore,score,playAgain})=>{




    const rongAnswer = data.incorrect_answers.map((rong)=>{
        const id = nanoid();
        return(
            <div className="rongAnswer" key={id}>
            <button className="answers"  onClick={()=>ckeck(false)}>{rong}</button>
            </div>

        )
    })
    return(
    <>
    
    <div className="quiz">
            {showScore ? 
            <div className="score_content">
            <h1 className="score">Your Score  {score} out of {length}</h1>
            <button className="rematch" onClick={playAgain} >Play again</button>
            </div>:
            
            <>
            <div>
                <h4 className="questionNumber">Question {question}/{length}</h4>
            </div>

            <div className="qustionContent">
            <h5 className="question">{data.question}</h5>
            <div className="answer">
                <div>
                    <button className="answers" onClick={()=>ckeck(true)}>{data.correct_answer}</button>
                </div>
                {rongAnswer}
            </div>
            </div>
            </>}
    </div>
    </>
    )
}
export default Quiz;

