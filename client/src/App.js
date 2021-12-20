import './App.css';
import { BrowserRouter  as Router, Routes, Route }from "react-router-dom";
import Test  from './components/Test.jsx';
import Nav  from './components/Nav.jsx';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Nav />
        <h1>Henry Dogs</h1>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
