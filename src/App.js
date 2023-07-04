

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Err404 from './pages/Err404';

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path="/" element= {<Home />}/>
  <Route path="/about" element= {<About />}/>
  <Route path="/contact" element= {<Contact />}/>
  <Route path="*" element= {<Err404 />}/>
  </Routes>
</BrowserRouter>
   </>
  );
}

export default App;
