import "./Style/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Page/Main";

function App() {
  return (
    <Router>
      <Main></Main>
    </Router>
  );
}

export default App;
