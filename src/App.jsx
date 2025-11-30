import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <PageContent>
                <HomePage />
            </PageContent>
            <Footer />
        </div>
    );
}

export default App;