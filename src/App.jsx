import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Header />
                <PageContent>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route path="/product/:productId" component={ProductDetailPage} />
                    </Switch>
                </PageContent>
                <Footer />
            </div>
        </Router>
    );
}

export default App;