import "@fontsource/public-sans";
import { CssVarsProvider } from "@mui/joy/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

// Routes
import Home from "./routes/Home";
import Students from "./routes/Students";

export function App() {
  return (
    <>
      <CssVarsProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/students" element={<Students />} />
          </Routes>
        </BrowserRouter>
      </CssVarsProvider>
    </>
  );
}
