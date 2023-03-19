import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LoginForm(props) {
    const handleLogin = props.handleLogin;
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .max(255, 'Vui lòng nhập không quá 255 ký tự')
                .required('Vui lòng nhập email')
                .email('Vui lòng nhập đúng định dạng email. vd: abc@gmail.com'),
            password: Yup.string()
                .required('Vui lòng nhập mật khẩu'),

        }),
        onSubmit: (values) => {
            handleLogin(values);

        }
    });

    return (
        <>
            <h1 className='text-center' >Login</h1>
            <form className='my-3 mx-auto' style={{ maxWidth: "500px" }} onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                    ) : null}

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger">{formik.errors.password}</div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    );
}
