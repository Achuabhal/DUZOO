import { Routes, Route, useLocation } from "react-router-dom";
import Component from "./assets/pages/login";
import Homepage from "./assets/pages/homepage";
import Atomobile from "./assets/pages/automobile";
import Form from "./assets/pages/form";
import Admin from "./assets/pages/loginadmin";
import Homecleaning from "./assets/pages/homeclean";
import APPLICATION from "./assets/pages/appliancesrepair";
import BEAUTY from "./assets/pages/beauty";
import Chef from "./assets/pages/chef";
import Electronic from "./assets/pages/electronics";
import Slot from "./assets/pages/SlotConfirmation";
import Thank from "./assets/pages/ThankYou";
import Modal from "./assets/component/Modal"; // Ensure you have a reusable Modal component
import ScrollToTop from "./assets/component/scroll";

function App() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      {/* Render ScrollToTop only for main routes */}
      {!background && <ScrollToTop />}
      
      {/* Main Routes */}
      <Routes location={background || location}>
        <Route path="/" element={<Component />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/you" element={<Thank />} />
        <Route path="/Form" element={<Form />} />
      </Routes>

      {/* Modal Routes */}
      {background && (
        <Routes>
          <Route
            path="/Atomobile"
            element={<ModalContent component={<Atomobile />} />}
          />
          <Route
            path="/Admin"
            element={<ModalContent component={<Admin />} />}
          />
          <Route
            path="/homecleaning"
            element={<ModalContent component={<Homecleaning />} />}
          />
          <Route
            path="/applicationrepair"
            element={<ModalContent component={<APPLICATION />} />}
          />
          <Route
            path="/beauty"
            element={<ModalContent component={<BEAUTY />} />}
          />
          <Route
            path="/chef"
            element={<ModalContent component={<Chef />} />}
          />
          <Route
            path="/electronic"
            element={<ModalContent component={<Electronic />} />}
          />
          <Route
            path="/slot"
            element={<ModalContent component={<Slot />} />}
          />
        </Routes>
      )}
    </>
  );
}

// ModalContent Component
const ModalContent = ({ component }: { component: React.ReactNode }) => {
  return (
    <Modal isOpen={true}>
      {component}
    </Modal>
  );
};

export default App;
