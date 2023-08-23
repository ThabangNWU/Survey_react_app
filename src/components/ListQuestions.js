import React, { useState } from 'react';


const useQuestionList = () => {
  const [questions, setQuestions] = useState(Object.keys(localStorage));

  const deleteQuestion = (questionId) => {
    localStorage.removeItem(questionId);
    setQuestions((prevQuestions) => prevQuestions.filter((question) => question !== questionId));
  };

  return { questions, deleteQuestion };
};

const QuestionItem = ({ questionId, deleteQuestion }) => {
  const [editing, setEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState('');

  const toggleEditing = () => {
    if (editing) {
      localStorage.setItem(questionId, JSON.stringify({ question: editedQuestion }));
    }
    setEditing(!editing);
  };

  try {
    const questionObj = JSON.parse(localStorage.getItem(questionId));
    return (
      <li className="question-item">
        {editing ? (
          <>
            <input
              type="text"
              value={editedQuestion}
              onChange={(e) => setEditedQuestion(e.target.value)}
            />
            <button className="edit-button" onClick={toggleEditing}>
              Save
            </button>
          </>
        ) : (
          <>
            {console.log(questionObj.question)}
            <p className="question-text">{questionObj.question }</p>
            <button className="edit-button" onClick={toggleEditing}>
              Edit
            </button>
            <button className="delete-button" onClick={() => deleteQuestion(questionId)}>
              Delete
            </button>
          </>
        )}
      </li>
    );
  } catch (error) {
    console.error(`Error parsing question with ID: ${questionId}`);
    return null;
  }
};

export const ListQuestions = () => {
  const { questions, deleteQuestion } = useQuestionList();

  return (
    <div className="centered-container">
      <div className="content">
        <h3 className="section-title">List of Questions</h3>
        <ul className="question-list">
          {questions.map((questionId) => (
            <QuestionItem key={questionId} questionId={questionId} deleteQuestion={deleteQuestion} />
          ))}
        </ul>
      </div>
      
    </div>
  );
};
