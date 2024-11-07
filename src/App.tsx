import "./Style/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Page/Main";
import { ReloadProvider } from "./Contexts/ReloadContext";
import { AddCardProvider } from "./Contexts/AddCardContext";
import { RemoveCardProvider } from "./Contexts/RemoveCardContext";
import { ModifyCardProvider } from "./Contexts/ModifyCardContext";

function App() {
  return (
    <Router>
      <ReloadProvider>
        <AddCardProvider>
          <RemoveCardProvider>
            <ModifyCardProvider>
              <Main />
            </ModifyCardProvider>
          </RemoveCardProvider>
        </AddCardProvider>
      </ReloadProvider>
    </Router>
  );
}

export default App;
