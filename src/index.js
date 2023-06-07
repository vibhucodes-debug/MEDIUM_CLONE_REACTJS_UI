import React from "react"
import react from "react"
import ReactDom from "react-dom/client"
import { RouterProvider,Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import App from "./App.js"
import Getstarted from "./pages/Get Started/Getstarted.jsx"
import NavBar from "./components/Navbar/Navbar.jsx"
import Home from "./pages/Home/Home.jsx"
import Write from "./pages/Write/Write.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"
// import Getstarted from "./pages/Get Started/Getstarted.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App/>}>

      <Route path="home" element={<><NavBar/><Home/></>}></Route>
      <Route path="login" element={<><Login/></>}></Route>
      <Route path="register" element={<><Register/></>}></Route>
      <Route path="/write" element={<><Write/></>}></Route>
      <Route path="/" element={<Getstarted/>}></Route>

    </Route>
  )
)
    


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
)