
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,  Routes,  Route  } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
//import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <>
     <div>
     
      <Router>
        <Routes>
        
          <Route path ="/" element={<Home/>}> </Route>
          <Route path ="/create" element={<Add/>}></Route>
          <Route path ="/edit" element={<Edit/>}></Route>
        
        
          
          
        </Routes>
      </Router>
     </div>
    </>
  );
}

export default App;
