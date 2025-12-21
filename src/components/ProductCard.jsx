import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const createProductSlug = (name) => {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    };

    const gender = product.gender === 'k' ? 'kadin' : product.gender === 'e' ? 'erkek' : 'unisex';
    const categoryName = product.category_id ? `category-${product.category_id}` : 'general';
    const productSlug = createProductSlug(product.name || product.title || 'product');
    const productUrl = `/shop/${gender}/${categoryName}/${product.category_id || 1}/${productSlug}/${product.id}`;

    return (
        <Link to={productUrl} className="group block cursor-pointer">
            {/* Product Image */}
            <div className="relative overflow-hidden bg-gray-200 mb-4 rounded-lg">
                <div className="aspect-[3/4] w-full">
                    <img 
                        src={product.images?.[0]?.url || product.image} 
                        alt={product.name || product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="text-center px-2">
                {/* Title */}
                <h5 className="font-bold text-[#252B42] mb-2">
                    {product.name || product.title}
                </h5>

                {/* Department */}
                {product.department && (
                    <p className="text-sm font-bold text-[#737373] mb-2">
                        {product.department}
                    </p>
                )}

                {/* Prices */}
                <div className="flex items-center justify-center gap-2 mb-2">
                    {product.originalPrice && (
                        <span className="text-base font-bold text-[#BDBDBD] line-through">
                            ${product.originalPrice.toFixed(2)}
                        </span>
                    )}
                    <span className="text-base font-bold text-[#23856D]">
                        ${product.price?.toFixed(2) || '0.00'}
                    </span>
                </div>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                    <div className="flex items-center justify-center gap-1.5">
                        {product.colors.map((color, index) => (
                            <button
                                key={index}
                                className="w-4 h-4 rounded-full border border-gray-300 hover:scale-110 transition-transform"
                                style={{ backgroundColor: color }}
                                aria-label={`Color option ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;