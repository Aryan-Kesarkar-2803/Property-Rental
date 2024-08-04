import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleLoginLogoutbar } from '../../ReduxStore/loginLogoutBar'
function loginLogoutBar() {
    const loginLogoutBarOpen = useSelector(state => state.loginLogoutBar.value)
    const dispatch = useDispatch()
  return (
    <div
      className={`w-1/3 h-auto md:w-1/3 lg:w-1/4 xl:w-1/6  fixed top-0 text-xl  right-0 mt-16 md:mt-20  pl-3 transition-transform  ease-in-out  bg-slate-900 text-white font-serif  ${
        loginLogoutBarOpen
          ? "duration-500 translate-x-0"
          : " duration-500 translate-x-full"
      }`}
    >
      <div className="  w-full h-full  flex flex-col justify-evenly pb-3">
        <div className="hover:text-amber-600  border-b-white  border border-black w-full pt-2  ">
          <NavLink
          to="/login"
          onClick={()=>{
            dispatch(toggleLoginLogoutbar())}}
          >Login</NavLink>
        </div>
        <div className="hover:text-amber-600  border-b-white   border border-black w-full pt-2  ">
          <NavLink
          to="/signup"
          onClick={()=>{
            dispatch(toggleLoginLogoutbar())}}
          >Sign Up</NavLink>
        </div>
        
        
      </div>
    </div>
  )
}

export default loginLogoutBar