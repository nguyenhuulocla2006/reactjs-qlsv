import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import slugify from 'react-slugify';
export default function Subject(props) {
    const data = props.data;
    return (
        <>
            <h1>Thông tin đăng ký môn học</h1>
            <Helmet>
                <title>Thông tin đăng ký môn học | QLSV</title>
            </Helmet>
            <div className="form-group">
                <label>Mã đăng ký môn học: </label>
                <span className='text-danger'>{data.id}</span>
            </div>
            <div className="form-group">
                <label>Tên sinh viên: </label>
                <Link to={`/student/${slugify(data.student_name, { lower: true })}-${data.student_id}.html`}>
                    <span className='text-primary'>
                        {data.student_name}
                    </span>
                </Link>

            </div>

            <div className="form-group">
                <label>Tên môn học </label>
                <Link to={`/student/${slugify(data.subject_name, { lower: true })}-${data.subject_id}.html`}>
                    <span className='text-primary'>
                        {data.subject_name}
                    </span>
                </Link>
            </div>

            <div className="form-group">
                <label>Điểm: </label>
                <span className='text-primary'>{data.score}</span>
            </div>

            <div className="form-group">
                <Link to={`/register/edit/${data.id}`} className="btn btn-warning btn-sm" >Sửa</Link>
            </div>

        </>
    );
}
