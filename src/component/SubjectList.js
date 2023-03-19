import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify'

export default function SubjectList(props) {
    const subjects = props.subjects;
    const handleShowDialog = props.handleShowDialog;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã MH</th>
                    <th>Tên</th>
                    <th>Số tín chỉ</th>
                    <th colSpan="2">Tùy Chọn</th>
                </tr>
            </thead>
            <tbody>

                {
                    subjects.map((subject, index) =>

                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <Link to={`/subject/${slugify(subject.name, { lower: true })}-${subject.id}.html`}>{subject.id}</Link>

                            </td>
                            <td>{subject.name}</td>
                            <td>{subject.number_of_credit}</td>

                            <td><Link to={`/subject/edit/${subject.id}`} className="btn btn-warning btn-sm" >Sửa</Link></td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => handleShowDialog(subject.id)}>Xóa</button></td>
                        </tr>
                    )
                }


            </tbody>
        </table>
    );
}
