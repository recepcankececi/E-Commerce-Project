import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-white">
                <Header />
                <PageContent>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route path="/product/:productId" component={ProductDetailPage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/team" component={TeamPage} />
                    </Switch>
                </PageContent>
                <Footer />
            </div>
        </Router>
    );
}

export default App;