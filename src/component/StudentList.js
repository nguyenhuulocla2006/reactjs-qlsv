import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify'

export default function StudentList(props) {
    const students = props.students;
    const handleShowDialog = props.handleShowDialog;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã SV</th>
                    <th>Tên</th>
                    <th>Ngày Sinh</th>
                    <th>Giới Tính</th>
                    <th />
                    <th />
                </tr>
            </thead>
            <tbody>

                {
                    students.map((student, index) =>

                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <Link to={`/student/${slugify(student.name, { lower: true })}-${student.id}.html`}>{student.id}</Link>

                            </td>
                            <td>{student.name}</td>
                            <td>{student.birthday}</td>
                            <td>{student.gender}</td>
                            <td><Link to={`/student/edit/${student.id}`} className="btn btn-warning btn-sm" >Sửa</Link></td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => handleShowDialog(student.id)}>Xóa</button></td>
                        </tr>
                    )
                }


            </tbody>
        </table>
    );
}
