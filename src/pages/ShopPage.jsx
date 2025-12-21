import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight } from 'lucide-react';
import ShopCategoryCard from '../components/ShopCategoryCard';
import ShopFilters from '../components/ShopFilters';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '../components/Pagination';
import { fetchProducts } from '../store/actions/productActions';
import { categories } from '../data/categories';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { productList, fetchState, total, limit, offset, filter, sort } = useSelector((state) => state.product);

  useEffect(() => {
    const params = {
      limit: limit,
      offset: offset,
    };
    
    if (categoryId) {
      params.category = categoryId;
    }
    
    if (filter) {
      params.filter = filter;
    }
    
    if (sort) {
      params.sort = sort;
    }
    
    dispatch(fetchProducts(params));
  }, [dispatch, categoryId, limit, offset, filter, sort]);

  return (
    <div className="bg-white">
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
            
            <nav className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="font-bold text-[#252B42] hover:text-[#23A6F0]">
                Home
              </Link>
              <ChevronRight size={16} className="text-[#BDBDBD]" />
              <span className="font-bold text-[#BDBDBD]">Shop</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {categories.map((category) => (
            <ShopCategoryCard key={category.id} category={category} />
          ))}
        </div>

        <ShopFilters categoryId={categoryId} />

        {fetchState === 'FETCHING' ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <LoadingSpinner size="large" />
          </div>
        ) : fetchState === 'FAILED' ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <p className="text-red-600 text-lg">Failed to load products. Please try again.</p>
          </div>
        ) : productList.length === 0 ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <p className="text-gray-600 text-lg">No products found.</p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing {offset + 1}-{Math.min(offset + productList.length, total)} of {total} products
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-12">
              {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}

        <Pagination 
          total={total}
          limit={limit}
          offset={offset}
          categoryId={categoryId}
          filter={filter}
          sort={sort}
        />
      </div>
    </div>
  );
};

export default ShopPage;
