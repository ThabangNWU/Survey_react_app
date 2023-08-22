export const ListQuestions = (props) => {
    const questions = Object.keys(localStorage);
    const questionDelete = (id) => {
        localStorage.removeItem(id);
        window.location.reload();
    }
    return (
        <div className="list_question">
            <h3>List of Questions</h3>
            <ul> 
                {
                    (
                        questions.map((question, key) => {
                            const questionObj = JSON.parse(localStorage.getItem(question))
                            return (
                                <li key={key}>
                                <p>{questionObj.question}</p>
                                <button>edit</button>
                                <button onClick={() => questionDelete(question)}>delete</button>
                            </li>
                            )
                        })
                    )
                }
              
                
            </ul>
        </div>
    )
}

