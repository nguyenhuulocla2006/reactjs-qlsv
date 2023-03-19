import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function CreateStudentForm(props) {
    const handleCreate = props.handleCreate;
    const formik = useFormik({
        initialValues: {
            name: '',
            number_of_credit: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(255, 'Vui lòng nhập không quá 255 ký tự')
                .required('Vui lòng nhập tên'),
            number_of_credit: Yup.number()
                .typeError('Vui lòng nhập số')
                .integer('Vui lòng nhập số nguyên')
                .min(1, 'Vui lòng nhập số lớn hoặc hoặc bằng 1')
                .max(10, 'Vui lòng nhập số nhỏ hoặc hoặc bằng 10')
                .required('Vui lòng nhập số tín chỉ'),

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
                            <label>Tên</label>
                            <input type="text" className="form-control" placeholder="Tên môn học mới" name="name" onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name} />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ) : null}

                        </div>
                        <div className="form-group">
                            <label>Số tín chỉ</label>
                            <input type="text" className="form-control" placeholder="Số tín chỉ" name="number_of_credit" onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.number_of_credit} />
                            {formik.touched.number_of_credit && formik.errors.number_of_credit ? (
                                <div className="text-danger">{formik.errors.number_of_credit}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
