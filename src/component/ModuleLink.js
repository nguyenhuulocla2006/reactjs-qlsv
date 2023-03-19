import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { isAuth } from '../common/util';
export default function ModuleLink() {
    // customize link đầu tiên để support những trang con của module student thì link / cũng active
    const location = useLocation();
    return (
        <>

            {isAuth() ?
                <div className="mb-3">
                    <NavLink to="/" className={(({ isActive, isPending }) =>
                        "btn btn-info mr-2 " + (isPending ? "pending" : isActive ? "active" : location.pathname.includes('/student') ? "active" : ""))
                    }
                    >Students</NavLink>
                    <NavLink to="/subject" className=" btn btn-info mr-2">Subject</NavLink>
                    <NavLink to="/register" className=" btn btn-info">Register</NavLink>
                </div>
                :
                null
            }

        </>
    );
}
