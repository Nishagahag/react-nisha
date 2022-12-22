import './App.css';
import Toolbar from './Components/Navigation/Toolbar/Toolbar';
import Header from './Components/Navigation/Toolbar/Header';
import Secondary from './Components/Navigation/Toolbar/Secondary';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './Components/Pages/About';

function App() {
  return (
    <div >
      <Router>
      <Toolbar/>
     <Header/>
     <Secondary/>
         <Routes>
            <Route path='/About' exact element={<About/>}/>
         </Routes>

      </Router>
      
    
    
    </div>
  
  );
}

export default App;
