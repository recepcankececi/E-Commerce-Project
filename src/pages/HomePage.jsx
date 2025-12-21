import HeroSwiper from '../components/HeroSwiper';
import EditorsPick from '../components/EditorsPick';
import FeaturedProducts from '../components/FeaturedProducts';
import VitaClassicCarousel from '../components/VitaClassicCarousel';
import NeuralUniverse from '../components/NeuralUniverse';
import FeaturedPosts from '../components/FeaturedPosts';
import TopCategories from '../components/TopCategories';

const HomePage = () => {
    return (
        <div>
            <HeroSwiper />
            <TopCategories />
            <EditorsPick />
            <FeaturedProducts />
            <VitaClassicCarousel />
            <NeuralUniverse />
            <FeaturedPosts />
        </div>
    );
};

export default HomePage;