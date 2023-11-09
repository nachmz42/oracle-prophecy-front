import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Front from "ui/pages/front/Front";
import HeartAttack from "ui/pages/heart_attack/HeartAttack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route path="/heart-attack" element={<HeartAttack />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
