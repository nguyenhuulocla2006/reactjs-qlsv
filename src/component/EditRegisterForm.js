import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
export default function EditRegisterForm(props) {
    const data = props.data;
    const handleUpdate = props.handleUpdate;
    const formik = useFormik({
        initialValues: data,
        validationSchema: Yup.object({
            score: Yup.number().typeError('Vui lòng nhập số')
                .min(0, 'Vui lòng nhập điểm lớn hơn hoặc bằng 0')
                .max(10, 'Vui lòng nhập điếm nhỏ hơn hoặc bằng 10')
                .nullable()
        }),
        onSubmit: async (values) => {

            handleUpdate(values);
        }
    });

    return (
        <>
            <Helmet>
                <title>Cập nhật điểm | QLSV</title>
            </Helmet>
            <form action="" method="POST" onSubmit={formik.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label>Tên sinh viên: </label>
                                <span>{data.student_name}</span>
                            </div>
                            <div className="form-group">
                                <label>Tên môn học: </label>
                                <span>{data.subject_name}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="score">Điểm</label>
                                <input type="text" name="score" id="score" onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.score} />
                                {formik.touched.score && formik.errors.score ? (
                                    <div className="text-danger">{formik.errors.score}</div>
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
