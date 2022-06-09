import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Resume from './Pages/Resume';


function App() {
  return (
    <div>
     
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/resume' element={<Resume/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
