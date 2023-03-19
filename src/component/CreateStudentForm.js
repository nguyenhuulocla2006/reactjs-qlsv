import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function CreateStudentForm(props) {
    const handleCreate = props.handleCreate;
    const formik = useFormik({
        initialValues: {
            name: '',
            birthday: '',
            gender: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .matches(/^[a-zA-ZAaàáãạăằắẵặâầấẫậbcdđeèéẽẹêềếễệghìíĩịklmnoòóõọôồốỗộơờớỡợpqrstuùúũụưừứữựvxyýỳỹỵAÀÁÃẠĂẰẮẴẶÂẦẤẪẬBCDĐEÈÉẼẸÊỀẾỄỆGHIÌÍĨỊKLMNOÒÓÕỌÔỒỐỖỘƠỜỚỠỢPQRSTUÙÚŨỤƯỪỨỮỰVXYÝỲỸỴ\s]+$/, 'Vui lòng nhập đúng định dạng họ và tên')
                .max(255, 'Vui lòng nhập không quá 255 ký tự')
                .required('Vui lòng nhập tên'),
            birthday: Yup.string()
                .required('Vui lòng nhập ngày sinh'),
            gender: Yup.string().required('Vui lòng chọn giới tính'),
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
    );
}
