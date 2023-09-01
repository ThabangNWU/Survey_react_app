import { useState } from "react";
import { Sidebar } from './Sidebar';
import { ListQuestions } from "./ListQuestions";

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
       <>  
            
                <form onSubmit={submitQuestion}>
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
                                    <h1>Create</h1>
                                </div>
                            </div>
                            <div className="create">              
                                <h3 className="create-logo__title">Creating a Create Questionnaire</h3> 
                                <input className="create__input" onChange={ event => setQuestion(event.target.value)} ></input>
                                <button className="create__add_btn" >Add</button>
                            </div> 
                            <ListQuestions/>
                         </div> 
                    </div> 
                </div>                       
                                 
                </form>
           
        </>
      
    
    );
}

