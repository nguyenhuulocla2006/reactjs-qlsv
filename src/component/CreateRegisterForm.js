import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CreateStudentForm(props) {
    const studentOptions = props.studentOptions;
    const subjectOptions = props.subjectOptions;
    const handleCreate = props.handleCreate;
    const formik = useFormik({
        initialValues: {
            student_id: '',
            subject_id: '',
        },
        validationSchema: Yup.object({
            student_id: Yup.string()
                .required('Vui lòng chọn sinh viên'),
            subject_id: Yup.string()
                .required('Vui lòng chọn môn học'),

        }),
        onSubmit: async (values) => {
            handleCreate(values);

        }
    });

    return (
        <form method="POST" onSubmit={formik.handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label for="student_id">Tên sinh viên</label>
                            <select className="form-control" name="student_id" id="student_id" onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.student_id} >
                                <option value="">Vui lòng chọn sinh viên</option>
                                {
                                    studentOptions.map((option) =>
                                        <option value={option.id}>{option.id} - {option.name}</option>
                                    )
                                }
                            </select>
                            {formik.touched.student_id && formik.errors.student_id ? (
                                <div className="text-danger">{formik.errors.student_id}</div>
                            ) : null}


                        </div>
                        <div className="form-group">
                            <label forHTML="student_id">Tên môn học</label>
                            <select class="form-control" name="subject_id" id="subject_id" onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject_id} >
                                <option value="">Vui lòng chọn môn học</option>
                                {
                                    subjectOptions.map((option) =>
                                        <option value={option.id}>{option.id} - {option.name}</option>
                                    )
                                }
                            </select>
                            {formik.touched.subject_id && formik.errors.subject_id ? (
                                <div className="text-danger">{formik.errors.subject_id}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Lưu</button>
                        </div>
                    </div>
                </div>
            </div >
        </form >
    );
}
