import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Front from "ui/pages/front/Front";
import HeartAttack from "ui/pages/heart_attack/HeartAttack";
import ErrorPage from "ui/pages/error_page/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route path="/heart-attack" element={<HeartAttack />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
