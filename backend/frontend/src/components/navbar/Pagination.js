import React from "react";

const Pagination = ({postPerPage, totalPost, paginate, currentPage}) => {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPost/postPerPage); i++){
        pageNumber.push(i);
    }

    return (
        <nav className="items-center">
            <ul className="pagination flex flex-wrap items-center justify-center">
                <li className="page-item mx-3 active:bg-orange p-3 text-h-lg">
                    <p onClick={()=>paginate(currentPage>1?currentPage-1:currentPage)} className="page-link cursor-pointer">
                        &#8249;
                    </p>
                </li>
                <li className="page-item mx-3 active:bg-orange p-3 text-h-md">
                    <p>
                        {currentPage} / {Math.ceil(totalPost/postPerPage)}
                    </p>
                </li>
                <li className="page-item mx-3 active:bg-orange p-3 text-h-lg">
                    <p onClick={()=>paginate(currentPage<Math.ceil(totalPost/postPerPage)?currentPage+1:currentPage)} className="page-link cursor-pointer">
                        &#8250;
                    </p>
                </li>
            </ul>
            {/* <ul className="pagination flex flex-wrap items-center justify-center">
                {pageNumber.map(number =>(
                    <li key={number} className="page-item mx-3 active:bg-orange p-3">
                        <p onClick={()=>paginate(number)} className="page-link cursor-pointer">
                            {number}
                        </p>
                    </li>
                ))}
            </ul> */}
        </nav>
    );
}

export default Pagination;