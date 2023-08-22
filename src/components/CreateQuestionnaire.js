import { useState } from "react";

export const CreateQuestionnaire = () => {
  const [question, setQuestion] = useState('');

    const submitQuestion = (event) => {
        let id  = localStorage.length;
        let questionId = id++;
        localStorage.setItem(
            questionId, JSON.stringify({question: question})
        )
    }
    console.log(question)
    return (
        <form onSubmit={submitQuestion}> 
            <div className="create">
                <h3 className="create__title">Creating a Create Questionnaire</h3>
                <input className="create__input" onChange={ event => setQuestion(event.target.value)} ></input>
                <button className="create__add_btn" >Add</button>
            </div>
        </form>
    
    );
}

