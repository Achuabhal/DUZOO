import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Component from "./assets/pages/login";
import Homepage from "./assets/pages/homepage"
import Atomobile from "./assets/pages/automobile"
import Form from "./assets/pages/form"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Atomobile" element={<Atomobile />} />
        <Route path="/Form" element={<Form />} />
      
      </Routes>
    </Router>
  );
}

export default App;
