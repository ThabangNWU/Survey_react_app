import { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
export const DashboardContent = () => {
    const [totalNumOfQuestion, setTotalNumOfQuestion] = useState(0);
    const [totalAgree, setTotalAgree] = useState(0);
    const[totalDisagree, setTotalDisagree] = useState(0);
    const[totalNeutral, setTotalNeutral] = useState(0);

    useEffect(() => {
        const questions = Object.keys(localStorage);
        const totalNum = questions.reduce((count, questionKey) => {
            const questionObj = JSON.parse(localStorage.getItem(questionKey));
            return count + (questionObj.question ? 1 : 0);
        }, 0);
        setTotalNumOfQuestion(totalNum);
    }, []);
    useEffect(() => {
        const answers = Object.keys(localStorage);
        const totalNum = answers.reduce((count, questionKey) => {
            const answerObj = JSON.parse(localStorage.getItem(questionKey));
            return count + (answerObj.answer === 'Agree' ? 1 : 0);
        }, 0);
        setTotalAgree(totalNum);
    }, []);
    useEffect(() => {
        const answers = Object.keys(localStorage);
        const totalNum = answers.reduce((count, questionKey) => {
            const answerObj = JSON.parse(localStorage.getItem(questionKey));
            return count + (answerObj.answer === 'Disagree' ? 1 : 0);
        }, 0);
        setTotalDisagree(totalNum);
    }, []);
    useEffect(() => {
        const answers = Object.keys(localStorage);
        const totalNum = answers.reduce((count, questionKey) => {
            const answerObj = JSON.parse(localStorage.getItem(questionKey));
            return count + (answerObj.answer === 'Neutral' ? 1 : 0);
        }, 0);
        setTotalNeutral(totalNum);
    }, []);

    

    return (
       <>
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
                                <h1>Dashboard</h1>
                            </div>
                </div>                                   
                <div className=' dashdaord__col6 dashboard__3 '>
                       <div className='dashboard_total dashboard--color-1'>
                        <p>Number of Questions</p>
                        <h3>{totalNumOfQuestion}</h3>
                       </div>
                       <div className='dashboard_total dashboard--color-2'>
                           <p>Agreements</p>
                            <h3>{totalAgree}</h3>
                        </div>
                        <div className='dashboard_total dashboard--color-3'>
                            <p>Disagreements</p>
                            <h3>{totalDisagree}</h3>
                            
                           </div>
                           <div className='dashboard_total dashboard--color-4'>
                            <p>Nuetral</p>
                            <h3>{totalNeutral}</h3>
                        
                        </div>
                    </div>
                
                    
                     
                    
                </div>
        </div>
    </div> 
            
      
       
       </>
    );
};

