import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./routes/Home";
import { LandingPage } from "./routes/Home/LandingPage";
import { Login } from "./routes/Home/Login";
import { ControlPanel } from "./routes/ControlPanel";
import { PanelView } from "./routes/ControlPanel/PanelView";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
      <Route path="/control-panel" element={<ControlPanel/>}>
        <Route index element={<PanelView/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
