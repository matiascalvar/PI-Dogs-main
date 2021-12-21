import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from './components/Home.jsx';
import LandingPage  from './components/LandingPage.jsx';
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
