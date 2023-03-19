import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { isAuth, getLoggedUser } from '../common/util';
export default function Menu() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate(`/auth/login`);
    }
    const loggedUser = getLoggedUser();
    const name = loggedUser?.name;
    return (

        <nav className="navbar navbar-expand-sm navbar-light bg-warning mb-3">
            <Link className="navbar-brand" href="#">Hệ Thống Quản Lý Sinh Viên (ReactJs)</Link>

            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        {
                            isAuth() ?
                                <Link className="nav-link text-danger" to="/user/profile">{name}</Link>

                                :
                                <Link className="nav-link" to="/auth/login">Login</Link>
                        }
                    </li>
                    <li className="nav-item">
                        {
                            isAuth() ?
                                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>

                                :
                                <Link className="nav-link" to="/register">Register</Link>
                        }
                    </li>

                </ul>

            </div>
        </nav>


    );
}
