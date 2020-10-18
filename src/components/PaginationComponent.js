import React, { useEffect, useState, useMemo } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ 
    total=0, 
    postsPerPage, 
    currentPage=1, 
    onPageChange 
}) => {
    
    const numberOfPosts = total.filter(item => item).length
    const [ totalPages, setTotalPages ] = useState(5);
    
    useEffect(() => {
        if(total > 0 && postsPerPage > 0)
            setTotalPages(Math.ceil(numberOfPosts / postsPerPage))
    }, [ total, postsPerPage, numberOfPosts ]);

    const paginationPosts = useMemo(() => {
        const pages = [];
        for(let i = 1; i <= totalPages; i++) {
            pages.push(
                <Pagination.Item 
                    key={i} 
                    active={i === currentPage} 
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }
        return pages;
    }, [ totalPages, currentPage, onPageChange ]);

    if(totalPages === 0) return null;

    return (
        <Pagination>
            <Pagination.Prev
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
                {paginationPosts}
            <Pagination.Next
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        </Pagination>
    );
};

export default PaginationComponent;
