import React, { useState } from 'react';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';

const useQuestionList = () => {
  const [questions, setQuestions] = useState(Object.keys(localStorage));

  const deleteQuestion = (questionId) => {
    localStorage.removeItem(questionId);
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question !== questionId)
    );
  };

  return { questions, deleteQuestion };
};

const QuestionItem = ({ questionId, deleteQuestion }) => {
  const [editing, setEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState('');

  const toggleEditing = () => {
    if (editing) {
      localStorage.setItem(
        questionId,
        JSON.stringify({ question: editedQuestion })
      );
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
            <p className="question-text">{questionObj.question}</p>
            <MdModeEditOutline className="edit-button" onClick={toggleEditing} />
            <MdDelete
              className="delete-button"
              onClick={() => deleteQuestion(questionId)}
            />
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
 
      <>
        <h3 className="section-title">List of Questions</h3>
        <ul className="question-list">
       
          {questions
            .filter((questionId) => !questionId.includes('_')) // Filter out answers
            .map((questionId) => (
              <QuestionItem
                key={questionId}
                questionId={questionId}
                deleteQuestion={deleteQuestion}
              />
            ))}
        </ul>
      </>
  
  );
};
