import { Grid, List } from 'lucide-react';

const ShopFilters = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 py-6">
      <div className="text-sm font-bold text-[#737373]">
        Showing all 12 results
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
      
      <div className="flex items-center justify-center gap-3">
        <select className="px-4 py-2.5 border border-[#DDDDDD] rounded text-sm text-[#737373] bg-[#F9F9F9] focus:outline-none focus:border-[#23A6F0]">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
        
        <button className="px-5 py-2.5 bg-[#23A6F0] text-white text-sm font-bold rounded hover:bg-[#1a8cd8] transition-colors">
          Filter
        </button>
      </div>
    </div>
  );
};

export default ShopFilters;
