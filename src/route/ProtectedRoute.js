import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuth } from '../common/util';
const ProtectedRoute = ({ children }) => {

    if (!isAuth()) {
        return <Navigate to="/auth/login" />;
    }

    return children;
};

export default ProtectedRoute;