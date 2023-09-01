export const Question = ({ questionObj, questionId, onChange }) => {
  return (

    
        <li>
          {questionObj.question}
          <div className="question-radio">
            <label><input type="radio" className="rad_question" value="Agree" name={questionId} onChange={onChange} /><p className="radio-agree">Agree</p> </label>
            <label> <input  type="radio" className="rad_question2" value="Neutral" name={questionId} onChange={onChange} /><p className="radio-neutral">Neutral</p></label>
            <label> <input type="radio" className="rad_question3" value="Disagree" name={questionId} onChange={onChange} /> <p className="radio-disagree">Disagree</p> </label>
       
          </div>
         
        </li>
        
  

  );
};