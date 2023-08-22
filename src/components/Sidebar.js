import { useState } from "react"
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [navigationState, setNavigationState] = useState();
  return (
    <div className="sidebar">
            <div className="logo">
                <h3>T - <span>Master</span></h3>
            </div>
            <ul className='survey_list'>
              {

              }
                <li className='survey__item'> <Link to={"/dashboard"}>Dashboard</Link></li>
                <li className='survey__item'><Link to={"/questionnaire"}>Questionnaire</Link></li>
                <li className='survey__item' ><Link to = {"/"}>Create</Link></li>
            </ul>
    </div>
  )
}

