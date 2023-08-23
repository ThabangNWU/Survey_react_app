import './App.css';
import { Homepage } from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Questionnaire } from './Pages/Questionnaire';
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element= {<Homepage/>}></Route>
        <Route path  = '/questionnaire' element = {<Questionnaire/>}></Route>
        <Route path  = '/dashboard' element = {<Dashboard/>}></Route>
      </Routes>
   </Router>
  );
}

export default App;
