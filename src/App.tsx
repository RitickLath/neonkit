import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import ComponentLibrary from "./Routes/ComponentLibrary";
import Gradient from "./Routes/Gradient";
import Templates from "./Routes/Templates";
import Navbar from "./Components/Navbar";
import Palettes from "./Routes/Palettes";
import TextGradient from "./Routes/TextGradient";
import Background from "./background/Background";

const App = () => {
  return (
    <BrowserRouter>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentLibrary />} />
        <Route path="/gradients" element={<Gradient />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/text-gradient" element={<TextGradient />} />
        <Route path="/Palettes" element={<Palettes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
