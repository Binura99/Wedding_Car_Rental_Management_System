// import axios from "axios";
// import { useEffect, useState, createContext } from "react";
// import jwtDecode from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext({
//   contextData: {
//     user: null,
//     loginUser: () => {},
//     logOutUser: () => {},
//     authTokens: null,
//   },
// });

// export default AuthContext;

// export const Test = ({ children }) => {
//   const authTokensString = localStorage.getItem("authTokens");
//   const [ accessToken , setAccessToken] = useState();
//   const savedAuthTokens = authTokensString ? JSON.parse(authTokensString) : null;
//   const savedUsers = authTokensString ? jwtDecode(authTokensString) : null;
//   const [authTokens, setAuthTokens] = useState("");
//   const [user, setUser] = useState(savedUsers);
//   const [loading, setLoading] = useState(true);
//   const Navigate = useNavigate();

//   const loginUser = async(data) => {

//     try {
//       const result = await axios.post("http://localhost:3001/auth/login", data)
//       if(result.status===200){
//         setAccessToken(result.data)
//         console.log(accessToken)
//         setUser(jwtDecode(result.data));
//         console.log(result.data)
//         localStorage.setItem("authTokens", JSON.stringify(result.data));
//         Navigate("/dashboard");
//       }
      
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   //  _______________________________________________________________________
//     // axios
//     //   .post("http://localhost:3001/auth/login", data)
//     //   .then((response) => {
//     //     if (response.status === 200) {
//     //       console.log(response.data)
//     //       setAccessToken("testtests   ");
//     //       setUser(jwtDecode(response.data));
//     //       console.log(accessToken);
//     //       localStorage.setItem("authTokens", JSON.stringify(response.data));
//     //       Navigate("/dashboard");
//     //     } else {
//     //       console.log("error");
//     //     }
//     //   })
//     //   .catch((error) => {
//     //     // Handle login error
//     //     console.error("Login failed:", error);
//     //   });

//     // ______________________________________________________________________________
//   };

//   const logOutUser = () => {
//     setAuthTokens(null);
//     setUser(null);
//     localStorage.removeItem("authTokens");
//     Navigate("/");
//   };

//   const updateToken = async () => {
//     axios
//       .post("http://127.0.0.1:8000/user/token/refresh", { refresh: authTokens?.refresh })
//       .then((response) => {
//         if (response.status === 200) {
//           setAuthTokens(response.data);
//           setUser(jwtDecode(response.data.access));
//           localStorage.setItem("authTokens", JSON.stringify(response.data));
//         } else {
//           logOutUser();
//           console.error("error", response.status);
//         }
//       })
//       .catch((error) => {
//         console.error("error", error);
//       });
//   };

//   useEffect(() => {
//     const fourMinutes = 4 * 60 * 1000;
//     const interval = setInterval(() => {
//       if (authTokens) {
//         updateToken();
//       }
//     }, fourMinutes);

//     return () => clearInterval(interval);
//   }, [authTokens, loading]);

//   const contextData = {
//     user: user,
//     authTokens: authTokens,
//     loginUser: loginUser,
//     logOutUser: logOutUser,
//   };

//   return (
//     <AuthContext.Provider value={{ contextData }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// };

import React, { useState } from 'react'
import { Test3 } from './Test3';
import { Test2 } from './Test2';


export const Test = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expenseData) => {
    setExpenses([...expenses, expenseData]);
    console.log('All Expenses:', expenses);
    alert('Expense added and data logged to console!');
  };

  return (
    <div>
      <h1>Vehicle Maintenance Page</h1>
      <Test2 onAddExpense={handleAddExpense} />
    </div>
  )
};