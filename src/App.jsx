import Header from './layout/Header';
import PageContent from './layout/PageContent';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <PageContent>
                <HomePage />
            </PageContent>
        </div>
    );
}

export default App;