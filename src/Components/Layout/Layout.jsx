import React, { useContext, useEffect } from 'react';
import Style from './Layout.module.css';
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import { UserContext } from '../../Context/UserContext';
export default function Layout() {

    return (
        < >
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
