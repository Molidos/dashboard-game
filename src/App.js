import React, { useContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import GlobalStyle from './global';

import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { AuthenticatedUserContext, AuthenticatedUserProvider } from "./context/authContext";
import { Profile } from "./pages/profile/Profile";



function App() {
  
  
  function RootNavigator(){
    
    const { user, setUser } = useContext(AuthenticatedUserContext);
    const [loading, setLoading] = useState(true);



    const ProtectedRoute = ({ children }) => {
      if (!user) {
        return <Navigate to="/login" />;
      }
      return children;
    };

    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/profile/:id",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]);
  
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, async authenticatedUser =>{
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setLoading(false);
      }
      );
      return ()=> unsubscribe();
    }, [user]);
  
  
  
    if(loading){
      return(
        <div>
          <p>carregando...</p>
        </div>
      )
    }
  
    return(
      
      <RouterProvider router={router} />
      
      
    )
  }
  


  return (
    <AuthenticatedUserProvider>
      <GlobalStyle/>
      <RootNavigator/>
    </AuthenticatedUserProvider>
    
  );
}

export default App;
