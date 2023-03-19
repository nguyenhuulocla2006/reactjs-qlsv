import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import Layout from '../component/Layout';
import { Index as IndexStudent } from '../page/student/Index';
import { Create as CreateStudent } from '../page/student/Create';
import { Show as ShowStudent } from '../page/student/Show';
import { Edit as EditStudent } from '../page/student/Edit';

import { Index as IndexSubject } from '../page/subject/Index';
import { Create as CreateSubject } from '../page/subject/Create';
import { Show as ShowSubject } from '../page/subject/Show';
import { Edit as EditSubject } from '../page/subject/Edit';

import { Index as IndexRegister } from '../page/register/Index';
import { Create as CreateRegister } from '../page/register/Create';
import { Show as ShowRegister } from '../page/register/Show';
import { Edit as EditRegister } from '../page/register/Edit';

import Login from '../page/auth/Login';
import ProtectedRoute from './ProtectedRoute';
import Profile from '../page/user/Profile';
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/user/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                {/* student */}
                <Route path="/" element={<ProtectedRoute><IndexStudent /></ProtectedRoute>} />
                <Route path="/student/create" element={<ProtectedRoute><CreateStudent /></ProtectedRoute>} />
                <Route path="/student/edit/:id" element={<ProtectedRoute><EditStudent /></ProtectedRoute>} />
                <Route path="/student/:slug" element={<ProtectedRoute><ShowStudent /></ProtectedRoute>} />

                {/* subject */}
                <Route path="/subject" element={<ProtectedRoute><IndexSubject /></ProtectedRoute>} />
                <Route path="/subject/create" element={<ProtectedRoute><CreateSubject /></ProtectedRoute>} />
                <Route path="/subject/edit/:id" element={<ProtectedRoute><EditSubject /></ProtectedRoute>} />
                <Route path="/subject/:slug" element={<ProtectedRoute><ShowSubject /></ProtectedRoute>} />

                {/* subject */}
                <Route path="/register" element={<ProtectedRoute><IndexRegister /></ProtectedRoute>} />
                <Route path="/register/create" element={<ProtectedRoute><CreateRegister /></ProtectedRoute>} />
                <Route path="/register/edit/:id" element={<ProtectedRoute><EditRegister /></ProtectedRoute>} />
                <Route path="/register/:slug" element={<ProtectedRoute><ShowRegister /></ProtectedRoute>} />
            </Route>
        </Routes>
    );
}
