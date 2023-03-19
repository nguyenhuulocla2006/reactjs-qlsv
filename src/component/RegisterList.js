import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify'

export default function RegisterList(props) {
    const registers = props.registers;
    const handleShowDialog = props.handleShowDialog;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã đăng ký</th>
                    <th>Mã SV</th>
                    <th>Tên SV</th>
                    <th>Mã MH</th>
                    <th>Tên MH</th>
                    <th>Điểm</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                {
                    registers.map((register, index) =>

                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <Link to={`/register/${slugify(register.student_name + "-" + register.subject_name, { lower: true })}-${register.id}.html`}>{register.id}</Link>

                            </td>

                            <td>{register.student_id}</td>
                            <td>{register.student_name}</td>
                            <td>{register.subject_id}</td>
                            <td>{register.subject_name}</td>
                            <td>{register.score}</td>
                            <td><Link to={`/register/edit/${register.id}`} className="btn btn-warning btn-sm" >Sửa</Link></td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => handleShowDialog(register.id)}>Xóa</button></td>
                        </tr>
                    )
                }


            </tbody>
        </table>
    );
}
