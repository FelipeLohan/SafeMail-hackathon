import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./routes/Home";
import { LandingPage } from "./routes/Home/LandingPage";
import { Login } from "./routes/Home/Login";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
