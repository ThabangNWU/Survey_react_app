import { Link } from "react-router-dom";
import {MdDashboardCustomize,MdCreate} from 'react-icons/md'
import {RiQuestionnaireFill} from 'react-icons/ri'
import me from '../images/me.jpg'


export const Sidebar = () => {
  
  return (
    <div className="sidebar">
            <div className="profile">
              <img className="profile__image" src= {me} alt="profile image"></img>
              <div>
                <h3>Thabang Lebele</h3>
                <p>Software Developer</p>
                <hr></hr>
              </div>
            </div>
            
            <div className="navigation">
              <Link className="survey__item " to={"/dashboard"}><MdDashboardCustomize className="icons"/><p>Dashboard</p></Link>
            </div>
            <div className="navigation">
              <Link className="survey__item " to={"/questionnaire"}><RiQuestionnaireFill className="icons"/><p>Questionnaire</p></Link>
            </div>
            <div className="navigation">
            <Link className="survey__item "  to = {"/"}><MdCreate className="icons"/><p>Create</p></Link>
            </div>
          
    </div>
  )
}

