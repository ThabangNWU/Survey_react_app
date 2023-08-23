import { CreateQuestionnaire } from "./CreateQuestionnaire";
import { ListQuestions } from "./ListQuestions";

export const Content = () => {
    return (
        <div className="main">
            <CreateQuestionnaire/>            
            <ListQuestions/>
        </div>
    )
}