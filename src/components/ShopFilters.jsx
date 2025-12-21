import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, List } from 'lucide-react';
import { setFilter, setSort, fetchProducts } from '../store/actions/productActions';

const ShopFilters = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { total, filter: reduxFilter, sort: reduxSort, limit, offset } = useSelector((state) => state.product);
  
  const [localFilter, setLocalFilter] = useState(reduxFilter);
  const [localSort, setLocalSort] = useState(reduxSort);

  const handleFilterClick = () => {
    dispatch(setFilter(localFilter));
    dispatch(setSort(localSort));
    
    const params = {
      limit,
      offset,
      filter: localFilter,
      sort: localSort,
    };
    
    if (categoryId) {
      params.category = categoryId;
    }
    
    dispatch(fetchProducts(params));
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 py-6">
      <div className="text-sm font-bold text-[#737373]">
        Showing {total} results
      </div>
      
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-bold text-[#737373]">Views:</span>
        <button className="p-2 border border-[#ECECEC] rounded hover:bg-gray-50">
          <Grid size={16} className="text-[#252B42]" />
        </button>
        <button className="p-2 border border-[#ECECEC] rounded hover:bg-gray-50">
          <List size={16} className="text-[#252B42]" />
        </button>
      </div>
      
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Search products..."
          value={localFilter}
          onChange={(e) => setLocalFilter(e.target.value)}
          className="px-4 py-2.5 border border-[#DDDDDD] rounded text-sm text-[#737373] focus:outline-none focus:border-[#23A6F0] min-w-[200px]"
        />
        
        <select 
          value={localSort}
          onChange={(e) => setLocalSort(e.target.value)}
          className="px-4 py-2.5 border border-[#DDDDDD] rounded text-sm text-[#737373] bg-[#F9F9F9] focus:outline-none focus:border-[#23A6F0]"
        >
          <option value="">Sort By</option>
          <option value="price:asc">Price: Low to High</option>
          <option value="price:desc">Price: High to Low</option>
          <option value="rating:asc">Rating: Low to High</option>
          <option value="rating:desc">Rating: High to Low</option>
        </select>
        
        <button 
          onClick={handleFilterClick}
          className="px-5 py-2.5 bg-[#23A6F0] text-white text-sm font-bold rounded hover:bg-[#1a8cd8] transition-colors"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default ShopFilters;
