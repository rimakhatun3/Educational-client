import React from 'react';
import { Outlet } from 'react-router-dom';
import ActiveLink from '../../../Components/ActiveLink';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open overflow-hidden">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col   justify-between  ">
         <Outlet/>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-green-200 mb-10 text-base-content">
            {/* Sidebar content here */}
            <li><ActiveLink to="course">Our Course</ActiveLink></li>
            <li><ActiveLink to="addCourse">Add Course</ActiveLink></li>
            {/* <li><ActiveLink to="payment">Payment</ActiveLink></li> */}
           
            <li><ActiveLink to="/">Home</ActiveLink></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;