import React, { useEffect} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setUsername} from './ReduxStore/userDetailsSlice.js'
import { toggleIsLogin } from "./ReduxStore/isLoginSlice";

function Layout() {

  const dispatch = useDispatch()
  
  const fetchDataFromLocalStorage = () => {
    dispatch(setUsername(localStorage?.getItem('name')));
  }

  useEffect(()=>{
    fetchDataFromLocalStorage();
    dispatch(toggleIsLogin())
  },[])

  useEffect(()=>{
    const contactToBackend = async() =>{
        await fetch("https://property-rental-backend-0hln.onrender.com/")
        .then((res)=>{
          console.log("Backend Connected");
        })
        .catch((e)=>{
          console.log("Error Connecting to Backend!")
        })
    }
     contactToBackend();
},[]);

  return (
    <div
    className=" min-h-screen min-w-full object-cover"
    style={{ backgroundImage: "url(/background.png)"}}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
