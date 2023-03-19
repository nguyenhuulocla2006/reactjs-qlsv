import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
export default function EditSubjectForm(props) {
    const data = props.data;
    const id = data.id;
    const handleUpdate = props.handleUpdate;
    const formik = useFormik({
        initialValues: data,
        validationSchema: Yup.object({
            name: Yup.string()
                .max(255, 'Vui lòng nhập không quá 255 ký tự')
                .required('Vui lòng nhập tên'),
            number_of_credit: Yup.string()
                .required('Vui lòng nhập số tín chỉ')
        }),
        onSubmit: async (values) => {

            handleUpdate(values);
        }
    });

    return (
        <>
            <Helmet>
                <title>Chỉnh sửa môn học {data.name} | QLSV</title>
            </Helmet>
            <form action="" method="POST" onSubmit={formik.handleSubmit}>
                <input type="hidden" name="id" defaultValue={id} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label>Tên</label>
                                <input type="text" className="form-control" placeholder="Tên của bạn" name="name" onChange={formik.handleChange}
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
                                {formik.touched.birthday && formik.errors.number_of_credit ? (
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
        </>

    );
}
