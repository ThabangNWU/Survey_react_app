import {Sidebar} from './components/Sidebar';
import { CreateQuestionnaire } from './components/CreateQuestionnaire';
import './App.css';
import { Homepage } from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Questionnaire } from './Pages/Questionnaire';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element= {<Homepage/>}></Route>
        <Route path  = '/questionnaire' element = {<Questionnaire/>}></Route>
      </Routes>
   </Router>
  );
}

export default App;
