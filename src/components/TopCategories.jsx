import { useSelector } from 'react-redux';
import CategoryCard from './CategoryCard';

const TopCategories = () => {
    const { categories } = useSelector((state) => state.product);
    
    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    if (topCategories.length === 0) {
        return null;
    }

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Top Categories
                    </h2>
                    <p className="text-gray-600">
                        Explore our most popular categories
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {topCategories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
