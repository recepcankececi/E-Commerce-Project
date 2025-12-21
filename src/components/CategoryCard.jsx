import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { id, title, gender, img } = category;
    
    const genderPath = gender === 'k' ? 'kadin' : gender === 'e' ? 'erkek' : 'unisex';
    const categoryPath = title.toLowerCase().replace(/\s+/g, '-');

    return (
        <Link 
            to={`/shop/${genderPath}/${categoryPath}/${id}`}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <div className="aspect-[4/3] overflow-hidden">
                <img 
                    src={img} 
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-sm mt-1 opacity-90">
                        {gender === 'k' ? 'Kadın' : gender === 'e' ? 'Erkek' : 'Unisex'}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;
