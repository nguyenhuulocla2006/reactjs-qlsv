import React from 'react';
import Student from '../../component/Student';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../component/Loading';
import { getAcessToken } from '../../common/util';

export function Show() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);
    const { slug } = useParams();



    // Xử lý slug để lấy id 
    const slugParts = slug.split('.html');
    const firstSlugPart = slugParts[0];
    const subSlugParts = firstSlugPart.split('-');
    const id = subSlugParts.pop();

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

    return (
        <>
            {
                !isLoaded ?
                    <Loading />
                    :
                    <Student data={data} />
            }
        </>
    );
}
