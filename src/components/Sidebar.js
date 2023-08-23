import { useState } from "react"
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [navigationState, setNavigationState] = useState();
  return (
    <div className="sidebar">
            <div className="logo">
                <h3>T - <span>Master</span></h3>
            </div>
            <div className="navigation">
              <Link className="survey__item " to={"/dashboard"}>Dashboard</Link>
            </div>
            <div className="navigation">
              <Link className="survey__item " to={"/questionnaire"}>Questionnaire</Link>
            </div>
            <div className="navigation">
            <Link className="survey__item "  to = {"/"}>Create</Link>
            </div>
          
    </div>
  )
}

