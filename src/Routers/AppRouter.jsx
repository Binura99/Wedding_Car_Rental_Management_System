import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../Pages/LoginPage"
import { Home } from "../Pages/HomePage"
import { RegForm } from "../Pages/Registration"
import { CreateAccount } from "../Pages/CreateAccountPage"
import { AppLayout } from "../Layout/AppLayout"
import { Vehicle } from "../Pages/VehiclePage"
import { Test } from "../Pages/Test"
import { Rates } from "../Pages/Rates"

const AppRouter = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>

        <Route path="test" element={<Test/>}/>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="bookNow" element={<RegForm/>}/>
          <Route path="createAccount" element={<CreateAccount/>}/>
          <Route path="vehicle" element={<Vehicle/>}/>
          <Route path="rates" element={<Rates/>}/>

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default AppRouter;