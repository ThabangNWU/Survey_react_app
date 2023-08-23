import { useState } from 'react';
import { Question } from './Question';


export const QuestionnaireContent = () => {
  const vraag = Object.keys(localStorage);
  const [selectedValue, setSelectedValue] = useState([]);


  const submitAnswer = (event) => {
    event.preventDefault();
  
    vraag.forEach((questionId, index) => {
      const answerId = `${localStorage.length}_${index}`;
      localStorage.setItem(
        answerId,
        JSON.stringify({ answerId, answer: selectedValue[index], questionId })
      );
    });
  
   
    setSelectedValue(new Array(vraag.length).fill(''));
  };
  

  const onChangeValue = (event, questionIndex) => {
    const newSelectedValue = [...selectedValue];
    newSelectedValue[questionIndex] = event.target.value;
    setSelectedValue(newSelectedValue);
  };
  
  return (
    <>
     
     <form onSubmit={submitAnswer} >
      <div className="main">
        <div className="list_question">
          <h3>Questionnaire</h3>
          <ul>
            {vraag.map((questionId) => {
              const questionObj = JSON.parse(localStorage.getItem(questionId));             
              return (
                questionObj.question !== undefined && 
                localStorage.length !== 0 ?
                <Question
                  key={questionId}
                  questionObj={questionObj}
                  questionId={questionId}
                  onChange={(event) => onChangeValue(event, vraag.indexOf(questionId))}
                />
                : "" 
                
                
                                
              );
            })}
          </ul>          
        </div>
      </div>

      
      <button>submit</button>
     </form>
    </>
   
 
  );
};
