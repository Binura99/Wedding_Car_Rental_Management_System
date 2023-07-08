import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/Navigation";

export const AppLayout = () => {
  return (
    <div className="w-full h-full">
        
        <NavBar/>
        <Outlet/>

    </div>
  )
};