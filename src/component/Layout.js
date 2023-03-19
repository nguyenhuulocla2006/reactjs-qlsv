import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export default function Layout() {
    // Lưu ý Header và Footer chỉ render 1 lần duy nhất
    return (
        <div className="container" style={{ marginTop: 20 }}>
            <Header />
            <Outlet />
            <Footer />
        </div>

    );
}
