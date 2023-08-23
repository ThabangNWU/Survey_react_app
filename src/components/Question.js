export const Question = ({ questionObj, questionId, onChange }) => {
  return (

    <form>
        <li>
          {questionObj.question}
          <input type="radio" value="Agree" name={questionId} onChange={onChange} /> Agree
          <input type="radio" value="Neutral" name={questionId} onChange={onChange} /> Neutral
          <input type="radio" value="Disagree" name={questionId} onChange={onChange} /> Disagree
        </li>
    </form>

  );
};