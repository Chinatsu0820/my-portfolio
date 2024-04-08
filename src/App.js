import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import History from './components/pages/History';
import Can from './components/pages/Can';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Link to='/'>HOME</Link>
      <br />
      <Link to='/History'>History</Link>
      <br />
      <Link to='/Can'>Can</Link>
      <br />
      <Routes>
        <Route path='/History' element={<History />} />
        <Route path='/Can' element={<Can />} />
      </Routes>
      This is my resume site
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
