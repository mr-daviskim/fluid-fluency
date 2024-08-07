import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.jsx";
import Main from "./components/Main.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Flashcard from './components/Flashcard.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/flashcard" element={<Flashcard />} />
      </Routes>
    </div>
  );
}
export default App;
