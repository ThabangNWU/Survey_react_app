import {useState} from 'react'

export const QuestionnaireContent = () => {
    const vraag = Object.keys(localStorage);
    const [selectedValue, setSelectedValue] = useState("");
    
    const onChangeValue = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value);
      };


    return (
        <div className="main">
            <div className="list_question">
            <h3>Questionnaire</h3>
            <ul> 
                {
                    (
                        vraag.map((question, key) => {
                            const questionObj = JSON.parse(localStorage.getItem(question))
                            return (
                                <div onChange={onChangeValue}>
                                    <li key={key} >
                                <p>{questionObj.question} <input type="radio"  value="Agree" name="answerOption" /> Agree
                                    <input type="radio" value="Neutral" name="answerOption" /> Neutral
                                    <input type="radio" value="Disagree" name="answerOption" /> Disagree</p>                              
                                
                                    
                                
                               
                            </li>
                                </div>
                            
                            )
                        })
                    )
                }
              
                
            </ul>
            <p>Selected value: {selectedValue}</p>
        </div>
        </div>
    )
}