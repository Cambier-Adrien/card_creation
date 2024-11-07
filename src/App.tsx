import "./Style/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Page/Main";
import { ReloadProvider } from "./Contexts/ReloadContext";
import { AddProvider } from "./Contexts/AddCardContext";
import { RemoveCardProvider } from "./Contexts/RemoveCardContext";
import { ModifyProvider } from "./Contexts/ModifyCardContext";

function App() {
  return (
    <Router>
      <ReloadProvider>
        <AddProvider>
          <RemoveCardProvider>
            <ModifyProvider>
              <Main />
            </ModifyProvider>
          </RemoveCardProvider>
        </AddProvider>
      </ReloadProvider>
    </Router>
  );
}

export default App;
