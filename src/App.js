import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import History from './components/pages/History';
import Can from './components/pages/Can';
import Contact from './components/pages/Contact';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <div className='Home'>
      <Routes>
        <Route path='/History' element={<History />} />
        <Route path='/Can' element={<Can />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
