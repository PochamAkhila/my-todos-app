import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavbar from '../Navbar/Index'
import "../Layout/Mystyle.css";
import { useContext } from 'react';
import { UserContext } from '../Table/ThemeContext';

const Index = () => {

    const {theme} = useContext(UserContext);

    const Style = theme && "dark";
    console.log(Style)
    
    return (
        <>
            <MyNavbar />
            <div className={`${Style}`}>
            <Outlet />
            </div>
        </>
    )
}

export default Index