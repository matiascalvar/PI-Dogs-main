import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from './components/Home/Home.jsx';
import LandingPage from './components/Landing Page/LandingPage.jsx';
import Detail from './components/Detail/Detail.jsx';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail id={'1' }/>} />
          {/* <Route path="/detail/:id" render={() => <Detail />} /> */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
