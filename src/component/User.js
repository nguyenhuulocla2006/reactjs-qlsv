import React from 'react';
import { Helmet } from 'react-helmet';
export default function User(props) {
    const data = props.data;
    return (
        <>
            <Helmet>
                <title>Người dùng {data.name} | QLSV</title>
            </Helmet>
            <h1>Thông tin người dùng</h1>
            <div className="form-group">
                <label>Mã: </label>
                <span className='text-danger'>{data.id}</span>
            </div>
            <div className="form-group">
                <label>Tên: </label>
                <span className='text-primary'>{data.name}</span>
            </div>
            <div className="form-group">
                <label>Email: </label>
                <span className='text-primary'>{data.email}</span>
            </div>


        </>
    );
}
