import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight, ChevronLeft, Star, Heart, ShoppingCart, Eye, ArrowLeft } from 'lucide-react';
import { fetchProductById } from '../store/actions/productActions';
import { addToCart } from '../store/actions/shoppingCartActions';
import { toast } from 'react-toastify';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { selectedProduct: product, fetchState } = useSelector((state) => state.product);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success(`${product.name || product.title} added to cart!`);
    }
  };

  if (fetchState === 'FETCHING') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (fetchState === 'FAILED' || !product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#252B42] mb-4">Product not found</h2>
        <button
          onClick={() => history.goBack()}
          className="text-[#23A6F0] hover:underline inline-flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Go Back
        </button>
      </div>
    );
  }

  const productImages = product.images?.length > 0 ? product.images.map(img => img.url) : [product.image || '/placeholder.jpg'];

  const renderStars = (rating = 4) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? 'fill-[#F3CD03] text-[#F3CD03]' : 'fill-gray-300 text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => history.goBack()}
              className="flex items-center gap-2 text-[#23A6F0] hover:text-[#1a8cd8] font-bold text-sm transition-colors"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </div>
          <nav className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <Link to="/" className="font-bold text-[#252B42] hover:text-[#23A6F0]">
              Home
            </Link>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <Link to="/shop" className="font-bold text-[#BDBDBD] hover:text-[#23A6F0]">
              Shop
            </Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="relative bg-gray-100 mb-4 rounded overflow-hidden">
              <div className="aspect-square w-full">
                <img
                  src={productImages[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => setSelectedImage(prev => (prev === 0 ? productImages.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
              >
                <ChevronLeft size={24} className="text-[#252B42]" />
              </button>
              <button
                onClick={() => setSelectedImage(prev => (prev === productImages.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
              >
                <ChevronRight size={24} className="text-[#252B42]" />
              </button>
            </div>

            <div className="flex gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-1 aspect-square rounded overflow-hidden border-2 ${
                    selectedImage === index ? 'border-[#23A6F0]' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-xl font-normal text-[#252B42] mb-4">
              {product.name || product.title}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              {renderStars(Math.round(product.rating || 0))}
              <span className="text-sm font-bold text-[#737373]">{product.sell_count || 0} Sales</span>
            </div>

            <div className="text-2xl font-bold text-[#252B42] mb-4">
              ${product.price?.toFixed(2)}
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-bold text-[#737373]">Availability :</span>
              <span className={`text-sm font-bold ${product.stock > 0 ? 'text-[#23A6F0]' : 'text-red-500'}`}>
                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
              </span>
            </div>

            <p className="text-sm text-[#858585] leading-relaxed mb-6 pb-6 border-b border-gray-200">
              {product.description || 'No description available.'}
            </p>

            {product.colors && product.colors.length > 0 && (
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      aria-label={`Color option ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              <button 
                onClick={handleAddToCart}
                className="px-5 py-2.5 bg-[#23A6F0] text-white text-sm font-bold rounded hover:bg-[#1a8cd8] transition-colors"
              >
                Add to Cart
              </button>
              <button className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Heart size={20} className="text-[#252B42]" />
              </button>
              <button 
                onClick={handleAddToCart}
                className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                <ShoppingCart size={20} className="text-[#252B42]" />
              </button>
              <button className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Eye size={20} className="text-[#252B42]" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-8 border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 text-sm font-bold ${
                activeTab === 'description'
                  ? 'text-[#737373] border-b-2 border-[#737373]'
                  : 'text-[#737373]'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`pb-4 text-sm font-bold ${
                activeTab === 'additional'
                  ? 'text-[#737373] border-b-2 border-[#737373]'
                  : 'text-[#737373]'
              }`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 text-sm font-bold ${
                activeTab === 'reviews'
                  ? 'text-[#737373] border-b-2 border-[#737373]'
                  : 'text-[#737373]'
              }`}
            >
              Reviews (0)
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <img
                src={productImages[0]}
                alt="Product detail"
                className="w-full rounded"
              />
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-[#252B42] mb-6">
                {product.name || product.title}
              </h3>
              <div className="text-sm text-[#737373] leading-relaxed">
                <p>
                  {product.description || 'No description available.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
