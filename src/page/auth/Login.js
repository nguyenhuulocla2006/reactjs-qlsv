import React from 'react';
import LoginForm from '../../component/LoginForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Login() {
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/login`, JSON.stringify(values));
            const access_token = response.data.access_token;
            const loggedUser = JSON.stringify(response.data.user);
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('loggedUser', loggedUser);
            toast.success(`Đăng nhập thành công`);
            navigate(`/`);
        }
        catch (error) {
            toast.error(error.response.data);
        };
    }

    return (
        <>
            <Helmet>
                <title>Login | QLSV</title>
            </Helmet>
            <LoginForm handleLogin={handleLogin} />

        </>
    );
}
