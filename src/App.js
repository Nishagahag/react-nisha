import './App.css';
import Toolbar from './Components/Navigation/Toolbar/Toolbar';
import Header from './Components/Navigation/Toolbar/Header';
import Secondary from './Components/Navigation/Toolbar/Secondary';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './Components/Pages/About';
import Intro from './Components/Pages/Intro';
import Layout from './Components/Pages/Layout';
import Support from './Components/Pages/Support';
import Labs from './Components/Pages/Labs';

function App() {
  return (
    <div >
      <Router>
      <Toolbar/>
     <Header/>
     <Secondary/>
         <Routes>
            
            <Route path='/Intro' exact element={<Intro/>}/>
            <Route path='/About' exact element={<About/>}/>
            <Route path='/About' exact element={<Layout/>}/>
            <Route path='/About' exact element={<Labs/>}/>
            <Route path='/About' exact element={<Support/>}/>


         </Routes>

      </Router>
      
    
    
    </div>
  
  );
}

export default App;
