import { QuestionnaireContent } from "../components/QuestionnaireContent"
import { Sidebar } from "../components/Sidebar"

export const Questionnaire = () => {
    return(
        <div className="container">
        <Sidebar></Sidebar>
        <QuestionnaireContent></QuestionnaireContent>
        </div>
    )
}