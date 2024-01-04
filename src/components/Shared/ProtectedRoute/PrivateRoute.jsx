import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const  location = useLocation();
    const {user, loading} = useContext(AuthContext)
    if (loading) {
        return <p>Loading............</p>
        
    }
    if (user) {
        return children
        
    }
    return <Navigate to="/signin" state={{ from: location }} replace />;

};

export default PrivateRoute;