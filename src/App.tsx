import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import ComponentLibrary from "./Routes/ComponentLibrary";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar";
const Templates = React.lazy(() => import("./Routes/Templates"));
const Gradient = React.lazy(() => import("./Routes/Gradient"));
const Palettes = React.lazy(() => import("./Routes/Palettes"));
const TextGradient = React.lazy(() => import("./Routes/TextGradient"));

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
            <React.Suspense fallback={<div>Loading....</div>}>
              <Gradient />
            </React.Suspense>
          }
        />
        <Route
          path="/templates"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Templates />
            </React.Suspense>
          }
        />
        <Route
          path="/text-gradient"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <TextGradient />
            </React.Suspense>
          }
        />
        <Route
          path="/Palettes"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Palettes />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
