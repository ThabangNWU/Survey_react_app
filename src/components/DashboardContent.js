import { useEffect, useState } from 'react';

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
       <div className="content">
             <div>
                <p>Number of Questions</p>
                <h3>{totalNumOfQuestion}</h3>
            </div>
            <div>
                <p>Agreements</p>
                <h3>{totalAgree}</h3>
            </div>
            <div>
                <p>Disagreeements</p>
                <h3>{totalDisagree}</h3>
            </div>
            <div>
                <p>Nuetral</p>
                <h3>{totalNeutral}</h3>
            </div>
       </div>
       
       </>
    );
};
