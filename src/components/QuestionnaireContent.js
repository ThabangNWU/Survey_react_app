import { useState } from 'react';
import { Question } from './Question';
import { Sidebar } from './Sidebar';


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
      
     <div className='container'>
      <div className='wrapper'>
        <div className='dashboard15'> 
          <Sidebar/>
        </div> 
        <div  className='dashboard85'>
          <div className='topbar'>
              <div className="topbar__log">
                <h3>T - <span>Master</span></h3>
              </div>
              <div className='topbar__heading'>                
                 <h1>Questionnaire</h1>
              </div>
          </div>
          <div className="list_question">
          <h3>Questionnaire</h3>
          <ul>
            {vraag.map((questionId) => {
              const questionObj = JSON.parse(localStorage.getItem(questionId));             
              return (
                questionObj.question !== undefined && 
                localStorage.length !== 0 ?
                <Question className="item_question" 
                  key={questionId}
                  questionObj={questionObj}
                  questionId={questionId}
                  onChange={(event) => onChangeValue(event, vraag.indexOf(questionId))}
                 
                />
                : ""                        
              );
             
            })}
             <button className='answers_btn'>submit</button>
          </ul>          
        </div>
        </div>
      </div>
      </div>


     

    

      
      
     </form>
    </>
   
 
  );
};
