import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {loadding,user} = UseAuth()
    if(loadding){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;