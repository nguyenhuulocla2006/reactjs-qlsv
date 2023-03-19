
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Search from '../../component/Search';
import Loading from '../../component/Loading';
import { toast } from 'react-toastify';
import { useSearchParams, NavLink, useLocation } from "react-router-dom";
import { getAcessToken, updateParam } from '../../common/util';
import Pagination from '../../component/Pagination';
import SubjectList from '../../component/SubjectList';
import axios from 'axios';
import ConfirmationDialog from '../../component/ConfirmationDialog';
import { Helmet } from 'react-helmet';

export function Index() {
    const [searchParams, setSearchParams] = useSearchParams();
    // Hỗ trợ để xóa dựa vào id
    const idItemRef = useRef(null);
    // Tìm kiếm
    const handleSearch = (e) => {
        e.preventDefault();
        const search = document.querySelector('[name=search]').value;
        setSearch(search);
        const newParams = {};
        newParams['search'] = search;
        newParams['page'] = 1;
        updateParam(searchParams, setSearchParams, newParams);
        // Reset current page
        setCurrentpage(1);
    }

    // Phân Trang
    const handlePage = (page) => {
        setCurrentpage(page);
        const newParams = {};
        newParams['page'] = page;
        updateParam(searchParams, setSearchParams, newParams);
    }

    //handleShowDialog
    const handleShowDialog = (id) => {
        setShowConfirmationDialog(true);
        idItemRef.current = id;
    }

    const handleCloseDialog = () => {
        setShowConfirmationDialog(false);
    }

    // Xóa 
    const handleDestroy = async () => {
        const id = idItemRef.current;
        try {
            setShowConfirmationDialog(false);
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/api/v1/subjects/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${getAcessToken()}`
                    }
                }
            );
            toast.success('Đã xóa môn học thành công');
            getAPIData();

        }
        catch (error) {

            toast.error(error?.response?.data || error.message);
        };
    }

    // Lấy mặc định từ đường dẫn
    const defaultPage = Number(searchParams.get('page') || 1);
    const defaultSearch = searchParams.get('search') || '';

    const [subjects, setSubjects] = useState([]);
    const [pagination, setPagination] = useState([page => 1, totalPage => 1]);
    const [totalItem, setTotalItem] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPage, setCurrentpage] = useState(defaultPage);
    const [search, setSearch] = useState(defaultSearch);

    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

    const location = useLocation();
    const locationSearch = location.search;

    // Lần đầu tiên khi component được render
    // Và chạy lại khi status change (chưa dùng tới)
    useEffect(() => {
        getAPIData();
        // disable dependency warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, search]);

    // Fix lỗi khi click lại vào NavLink subject đang active
    useEffect(() => {

        if (locationSearch === '') {
            setCurrentpage(1);
            setSearch('');
        }
        // disable dependency warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationSearch]);

    const getAPIData = async () => {
        try {
            let response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/v1/subjects?page=${currentPage}&search=${search}`, {
                headers: {
                    'Authorization': `Bearer ${getAcessToken()}`
                }
            }
            );
            let data = response.data;
            setSubjects(data.items);
            setTotalItem(data.totalItem);
            setPagination(data.pagination);
            setIsLoaded(true);

        }
        catch (error) {
            setIsLoaded(true);
            toast.error(error?.response?.data || error.message);
        };
    }
    return (
        <>
            <h1>Danh sách môn học</h1>
            <Helmet>
                <title>Danh sách môn học | QLSV</title>
            </Helmet>
            <NavLink to="/subject/create" className="btn btn-info">Add</NavLink>
            <Search handleSearch={(e) => handleSearch(e)} search={search} />
            {
                !isLoaded ?
                    <Loading />
                    :
                    <>
                        <SubjectList subjects={subjects} handleShowDialog={handleShowDialog} />
                        <div>
                            <span>Số lượng: {subjects.length}/{totalItem}</span>
                        </div>

                        <Pagination pagination={pagination} currentPage={currentPage} handlePage={handlePage} />

                        {/* confirm delete */}
                        {showConfirmationDialog && (
                            <ConfirmationDialog
                                message="Bạn có muốn xóa mục này?"
                                onConfirm={handleDestroy}
                                onCancel={handleCloseDialog}
                            />
                        )}
                    </>
            }

        </>
    );
}

