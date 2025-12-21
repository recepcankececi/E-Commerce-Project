import { useDispatch } from 'react-redux';
import { setOffset, fetchProducts } from '../store/actions/productActions';

const Pagination = ({ total, limit, offset, categoryId, filter, sort }) => {
    const dispatch = useDispatch();
    const currentPage = Math.floor(offset / limit) + 1;
    const totalPages = Math.ceil(total / limit);

    const handlePageChange = (newPage) => {
        const newOffset = (newPage - 1) * limit;
        dispatch(setOffset(newOffset));
        
        const params = {
            limit,
            offset: newOffset,
        };
        
        if (categoryId) params.category = categoryId;
        if (filter) params.filter = filter;
        if (sort) params.sort = sort;
        
        dispatch(fetchProducts(params));
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        
        return pages;
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex justify-center items-center gap-2 pb-12">
            <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="px-5 py-3 border border-[#BDBDBD] text-[#BDBDBD] font-bold text-sm rounded hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                First
            </button>
            
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-3 border border-[#E9E9E9] text-[#23A6F0] font-bold text-sm rounded hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            
            {getPageNumbers().map((page, index) => (
                page === '...' ? (
                    <span key={`ellipsis-${index}`} className="px-2 text-[#BDBDBD]">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-3 font-bold text-sm rounded transition-colors ${
                            currentPage === page
                                ? 'bg-[#23A6F0] text-white hover:bg-[#1a8cd8]'
                                : 'border border-[#E9E9E9] text-[#23A6F0] hover:bg-gray-50'
                        }`}
                    >
                        {page}
                    </button>
                )
            ))}
            
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-3 border border-[#E9E9E9] text-[#23A6F0] font-bold text-sm rounded hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
            
            <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-5 py-3 border border-[#E9E9E9] text-[#23A6F0] font-bold text-sm rounded hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Last
            </button>
        </div>
    );
};

export default Pagination;
