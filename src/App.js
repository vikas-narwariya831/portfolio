import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';
import Contact from './component/Contact/Contact';

function App() {
  return (
<BrowserRouter>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/skills' element={<Skills/>}/>
  <Route path='/contact' element={<Contact/>}/>



</Routes>


</BrowserRouter>
   
  








  );
}

export default App;
