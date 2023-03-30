import "@fontsource/public-sans";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

// Routes
import Home from "./routes/Home";
import Students from "./routes/Students";
import CreateStudent from "./routes/CreateStudent";
import EditStudent from "./routes/EditStudent";


export function App() {
  return (
    <>
      <CssVarsProvider>
        <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/students" element={<Students />} />
            <Route exact path="/create-student" element={<CreateStudent />} />
            <Route exact path="/edit-student/:id" element={<EditStudent />} />
          </Routes>
        </BrowserRouter>
        </CssBaseline>
      </CssVarsProvider>
    </>
  );
}
