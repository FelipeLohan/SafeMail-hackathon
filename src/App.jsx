
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Forms } from "./components/Forms";
import { Plans } from "./components/Plans";
import { Footer } from "./components/Footer";
import { Advertisements } from "./components/Advertisements";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./routes/Home";
import { LandingPage } from "./routes/Home/LandingPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<LandingPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
