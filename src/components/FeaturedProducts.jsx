import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts = () => {
    return (
        <section className="py-12 lg:py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-8 lg:mb-12">
                    <h4 className="text-xl text-[#737373] mb-2 lg:mb-3">
                        Featured Products
                    </h4>
                    <h3 className="text-2xl lg:text-2xl font-bold text-[#252B42] mb-2 lg:mb-3">
                        BESTSELLER PRODUCTS
                    </h3>
                    <p className="text-sm lg:text-base text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-7">
                    {products.slice(0, 8).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;