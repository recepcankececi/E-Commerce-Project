import HeroSwiper from '../components/HeroSwiper';
import EditorsPick from '../components/EditorsPick';
import FeaturedProducts from '../components/FeaturedProducts';
import VitaClassicCarousel from '../components/VitaClassicCarousel';
import NeuralUniverse from '../components/NeuralUniverse';
import FeaturedPosts from '../components/FeaturedPosts';

const HomePage = () => {
    return (
        <div>
            <HeroSwiper />
            <EditorsPick />
            <FeaturedProducts />
            <VitaClassicCarousel />
            <NeuralUniverse />
            <FeaturedPosts />
            {/* Diğer home page bölümleri buraya eklenecek */}
        </div>
    );
};

export default HomePage;