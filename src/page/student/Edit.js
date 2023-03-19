import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../component/Loading';
import EditStudentForm from '../../component/EditStudentForm';
import slugify from 'react-slugify';
import { getAcessToken } from '../../common/util';

export function Edit() {
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();
    // phiên bản cũ useHistory
    const navigate = useNavigate();

    const getStudent = async (id) => {
        try {
            let response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/v1/students/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${getAcessToken()}`
                    }
                }
            );
            let data = response.data;
            setData(data);
            setIsLoaded(true);

        }
        catch (error) {
            setIsLoaded(true);
            toast.error(error?.response?.data || error.message);
        };
    }
    useEffect(() => {
        getStudent(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const handleUpdate = async (values) => {
        try {

            let response = await axios.put(`${process.env.REACT_APP_API_URL}/api/v1/students/${id}`, JSON.stringify(values),
                {
                    headers: {
                        'Authorization': `Bearer ${getAcessToken()}`
                    }
                });
            const data = response.data;
            const name = data.name;
            toast.success(`Đã cập nhật sinh viên ${name} thành công`);
            // action.resetForm();//function của formik
            //chuyển hướng đến trang chi tiết 
            navigate(`/student/${slugify(data.name, { lower: true })}-${data.id}.html`);
        }
        catch (error) {

            toast.error(error?.response?.data || error.message);
        };
    }

    return (
        <>
            <h1>Chỉnh sửa sinh viên</h1>
            {
                !isLoaded ?
                    <Loading />
                    :
                    <EditStudentForm data={data} handleUpdate={handleUpdate} />
            }

        </>
    );
}
