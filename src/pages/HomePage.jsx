import HeroSwiper from '../components/HeroSwiper';
import EditorsPick from '../components/EditorsPick';
import FeaturedProducts from '../components/FeaturedProducts';
import VitaClassicCarousel from '../components/VitaClassicCarousel';

const HomePage = () => {
    return (
        <div>
            <HeroSwiper />
            <EditorsPick />
            <FeaturedProducts />
            <VitaClassicCarousel />
            {/* Diğer home page bölümleri buraya eklenecek */}
        </div>
    );
};

export default HomePage;