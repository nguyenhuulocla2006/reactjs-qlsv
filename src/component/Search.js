import React from 'react';
import { useState, useEffect } from 'react';

export default function Search(props) {
    // Phải sử dụng state và useEffect để cập nhật value của thẻ input bằng với giá trị của props.search
    const [pattern, setPattern] = useState(props.search);

    // props.search thay đổi thì chạy code trong useEffect
    useEffect(() => {
        setPattern(props.search);
    }, [props.search]);
    return (
        <>
            <form action="#" method="GET" onSubmit={props.handleSearch}>
                <label className="form-inline justify-content-end">Tìm kiếm: <input type="search" name="search" className="form-control" onChange={e => setPattern(e.target.value)} value={pattern} />
                    <button className="btn btn-danger" >Tìm</button>
                </label>
            </form>
        </>
    );
}

