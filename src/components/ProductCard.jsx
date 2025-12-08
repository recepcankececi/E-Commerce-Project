import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="group block">
            {/* Product Image */}
            <div className="relative overflow-hidden bg-gray-200 mb-4">
                <div className="aspect-[3/4] w-full">
                    <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="text-center px-2">
                {/* Title */}
                <h5 className="font-bold text-[#252B42] mb-2">
                    {product.title}
                </h5>

                {/* Department */}
                <p className="text-sm font-bold text-[#737373] mb-2">
                    {product.department}
                </p>

                {/* Prices */}
                <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-base font-bold text-[#BDBDBD] line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
                    <span className="text-base font-bold text-[#23856D]">
            ${product.price.toFixed(2)}
          </span>
                </div>

                {/* Colors */}
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
            </div>
        </Link>
    );
};

export default ProductCard;