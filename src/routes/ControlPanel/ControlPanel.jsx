import { Outlet } from "react-router";
import { HeaderControlPanel } from "../../components/HeaderControlPanel";

const ControlPanel = () => {
  return(
    <>
    <HeaderControlPanel/>
    <Outlet/>
    </>
  );
};

export { ControlPanel };
