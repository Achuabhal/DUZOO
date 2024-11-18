import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Component from "./assets/pages/login";
import Homepage from "./assets/pages/homepage"
import Atomobile from "./assets/pages/automobile"
import Form from "./assets/pages/form"
import Admin from "./assets/pages/loginadmin"
import Homecleaning from "./assets/pages/homeclean"
import APPLICATION from "./assets/pages/appliancesrepair"
import BEAUTY from "./assets/pages/beauty"
import Chef from "./assets/pages/chef"
import Electronic from "./assets/pages/electronics"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Atomobile" element={<Atomobile />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/homecleaning" element={<Homecleaning />} />
        <Route path="/applicationrepair" element={<APPLICATION />} />
        <Route path="/beauty" element={<BEAUTY />} />
        <Route path="/chef" element={< Chef/>} />
        <Route path="/electronic" element={<Electronic />} />

      </Routes>
    </Router>
  );
}

export default App;
