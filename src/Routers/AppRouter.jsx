import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../Pages/LoginPage"
import { Home } from "../Pages/HomePage"
import { RegForm } from "../Pages/Registration"
import { CreateAccount } from "../Pages/CreateAccountPage"
import { AppLayout } from "../Layout/AppLayout"
import { Vehicle } from "../Pages/VehiclePage"
import { Test } from "../Pages/Test"
import { Rates } from "../Pages/Rates"
import { UserDashboard } from "../Pages/UserDashboard"
import { VehicleInfo } from "../Pages/VehicleInfo"
import { Test2 } from "../Pages/Test2"
import { ManageVehicles } from "../Pages/ManageVehicles"
// import { AuthProvider } from "../helpers/AuthContext"
// import ProtectedRoute from "../utils/ProtectedRoute"
import { Test3 } from "../Pages/Test3"
import { AdminDashboard } from "../Pages/AdminDashboard"
import { ManageUsers } from "../Pages/ManageUsers"
import { ManageBooking } from "../Pages/ManageBooking"
import { DriverDashboard } from "../Pages/DriverDashboard"
import { MonthReport } from "../Pages/MonthReport"
// import axios from "axios"
// import { AuthContext } from "../helpers/AuthContext"
// import { useState, useEffect} from "react"



const AppRouter = () => {


  return (
    
    <BrowserRouter>
    {/* <AuthContext.Provider value={{authState,setAuthState}}> */}
      <Routes>
        <Route path="/" element={<AppLayout/>}>

        <Route path="test" element={<Test/>}/>
        <Route path="test2" element={<Test2/>}/>
        <Route path="test3" element={<Test3/>}/>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="bookNow" element={<RegForm/>}/>
          <Route path="createAccount" element={<CreateAccount/>}/>
          <Route path="vehicle" element={<Vehicle/>}/>
          <Route path="rates" element={<Rates/>}/>
          <Route path="dashboard" element={<UserDashboard/>}/>
          <Route path="vehicle/:id" element={<VehicleInfo/>}/>
          <Route path="managevehicle" element={<ManageVehicles/>}/>
          <Route path="adminDashboard" element={<AdminDashboard/>}/>
          <Route path="driverDashboard" element={<DriverDashboard/>}/>
          <Route path="manageUsers" element={<ManageUsers/>}/>
          <Route path="manageBooking" element={<ManageBooking/>}/>
          <Route path="monthReport" element={<MonthReport/>}/>


        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default AppRouter;

  // const [authState, setAuthState] = useState({
  //   email: "",
  //   id: "",
  //   name: "",
  //   role: "",
  //   status: false,
  // });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/auth/auth2", {
  //       headers: {
  //         accessToken: localStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.error) {
  //         setAuthState({ ...authState, status: false });
  //       } else {
  //         setAuthState({
  //           email: response.data.email,
  //           id: response.data.id,
  //           name: response.data.name,
  //           role: response.data.role,
  //           status: true,
  //         });
  //       }
  //     });

  //   // Add authState as a dependency
  // }, []);
