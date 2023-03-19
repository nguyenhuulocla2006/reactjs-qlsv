import React from 'react';

export default function Pagination(props) {
    const currentPage = props.currentPage;
    const pagination = props.pagination;
    const handlePage = props.handlePage;
    let pageNumbers = [];
    for (let i = 1; i <= pagination.totalPage; i++) {
        pageNumbers.push(i);
    }


    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">
                <li className="page-item">
                    <button disabled={currentPage <= 1 ? true : false} className="page-link" onClick={() => handlePage(currentPage - 1)} aria-label="Previous">
                        <span aria-hidden="true">Previous</span>

                    </button>
                </li>


                {
                    pageNumbers.map((num) =>
                        <li className={"page-item " + (num === currentPage ? 'active' : '')} key={num}>
                            <button className="page-link" onClick={() => handlePage(num)} >{num}</button>
                        </li>)

                }
                <li className="page-item">
                    <button disabled={currentPage >= pagination.totalPage ? true : false} className="page-link" onClick={() => handlePage(currentPage + 1)} aria-label="Next">
                        <span aria-hidden="true">Next</span>

                    </button>
                </li>
            </ul>
        </nav>
    );
}
