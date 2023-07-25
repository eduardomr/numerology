import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Numero from "./pages/Numero";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Numero />} />
        <Route path="/sobre" element={<Inicio />} />
      </Routes>
    </div>
  );
}

export default App;