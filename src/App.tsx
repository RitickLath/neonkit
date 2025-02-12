import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import ComponentLibrary from "./Routes/ComponentLibrary";
const Gradient = React.lazy(() => import("./Routes/Gradient"));
const Palettes = React.lazy(() => import("./Routes/Palettes"));
import Templates from "./Routes/Templates";
import Navbar from "./Components/Navbar";
import TextGradient from "./Routes/TextGradient";
import CTA from "./Components/CTA";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <CTA />
            </>
          }
        />
        <Route path="/components" element={<ComponentLibrary />} />
        <Route
          path="/gradients"
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              <Gradient />
            </React.Suspense>
          }
        />
        <Route path="/templates" element={<Templates />} />
        <Route path="/text-gradient" element={<TextGradient />} />
        <Route
          path="/Palettes"
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              <Palettes />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
