import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Subject(props) {
    const data = props.data;
    return (
        <>
            <h1>Thông tin môn học</h1>
            <Helmet>
                <title>Thông tin môn học {data.name} | QLSV</title>
            </Helmet>
            <div className="form-group">
                <label>Mã môn học: </label>
                <span className='text-danger'>{data.id}</span>
            </div>
            <div className="form-group">
                <label>Tên: </label>
                <span className='text-primary'>{data.name}</span>
            </div>
            <div className="form-group">
                <label>Số tín chỉ: </label>
                <span className='text-primary'>{data.number_of_credit}</span>
            </div>

            <div className="form-group">
                <Link to={`/subject/edit/${data.id}`} className="btn btn-warning btn-sm" >Sửa</Link>
            </div>

        </>
    );
}
