import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
export default function EditStudentForm(props) {
    const data = props.data;
    const id = data.id;
    const handleUpdate = props.handleUpdate;
    const formik = useFormik({
        initialValues: data,
        validationSchema: Yup.object({
            name: Yup.string()
                .max(255, 'Vui lòng nhập không quá 255 ký tự')
                .required('Vui lòng nhập tên'),
            birthday: Yup.string()
                .required('Vui lòng nhập ngày sinh'),
            gender: Yup.string().required('Vui lòng chọn giới tính'),
        }),
        onSubmit: async (values) => {

            handleUpdate(values);
        }
    });

    return (
        <>
            <Helmet>
                <title>Chỉnh sửa sinh viên {data.name} | QLSV</title>
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
                                <label>Birthday</label>
                                <input type="date" className="form-control" placeholder="Ngày sinh của bạn" name="birthday" onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.birthday} />
                                {formik.touched.birthday && formik.errors.birthday ? (
                                    <div className="text-danger">{formik.errors.birthday}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Chọn Giới tính</label>
                                <select className="form-control" id="gender" name="gender" onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.gender}>
                                    <option value="">---</option>
                                    <option value="nam">Nam</option>
                                    <option value="nữ">Nữ</option>
                                    <option value="khác">Khác</option>
                                </select>
                                {formik.touched.gender && formik.errors.gender ? (
                                    <div className="text-danger">{formik.errors.gender}</div>
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
