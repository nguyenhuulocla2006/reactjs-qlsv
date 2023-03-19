import React from 'react';
import { getLoggedUser } from '../../common/util';
import Loading from '../../component/Loading';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import User from '../../component/User';
import { getAcessToken } from '../../common/util';


export default function Profile() {
    const user = getLoggedUser();
    const id = user.id;
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;
    const getUser = async (id) => {

        try {
            let response = await axios.get(
                `${apiUrl}/api/v1/users/${id}`,
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
        getUser(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <>
                {
                    !isLoaded ?
                        <Loading />
                        :
                        data ?
                            <User data={data} />
                            :
                            null
                }
            </>
        </>
    );
}
