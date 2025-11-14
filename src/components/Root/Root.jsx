import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
          <Navbar></Navbar>
         <div className='min-h-screen'>
             <Outlet></Outlet>
         </div>
          <Footer></Footer>
        </div>
    );
};

export default Root;