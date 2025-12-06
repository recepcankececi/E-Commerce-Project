const ShopCategoryCard = ({ category }) => {
  return (
    <div className="relative overflow-hidden group cursor-pointer">
      <div className="aspect-[4/5] md:aspect-[3/4] w-full">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h3 className="font-bold text-base mb-2">
          {category.title}
        </h3>
        <p className="text-sm">
          {category.itemCount} Items
        </p>
      </div>
    </div>
  );
};

export default ShopCategoryCard;
