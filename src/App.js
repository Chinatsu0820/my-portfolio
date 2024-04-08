import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import History from './components/pages/History';
import Can from './components/pages/Can';
import Contact from './components/pages/Contact';
import Welcomeimg from './assets/imgs/akazukinchan.png';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <div className='Home'>
        <h1> Welcome to my website!</h1>
        <img className='home-img' src={Welcomeimg} alt='This is a picture for toppage'/>
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
