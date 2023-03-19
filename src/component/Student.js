import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Student(props) {
    const data = props.data;
    return (
        <>
            <h1>Thông tin sinh viên</h1>
            <Helmet>
                <title>Thông tin sinh viên {data.name} | QLSV</title>
            </Helmet>
            <div className="form-group">
                <label>Mã sinh viên: </label>
                <span className='text-danger'>{data.id}</span>
            </div>
            <div className="form-group">
                <label>Tên: </label>
                <span className='text-primary'>{data.name}</span>
            </div>
            <div className="form-group">
                <label>Ngày sinh: </label>
                <span className='text-primary'>{data.birthday}</span>
            </div>
            <div className="form-group">
                <label>Giới tính: </label>
                <span className='text-primary'>{data.gender}</span>
            </div>
            <div className="form-group">
                <Link to={`/student/edit/${data.id}`} className="btn btn-warning btn-sm" >Sửa</Link>
            </div>

        </>
    );
}
