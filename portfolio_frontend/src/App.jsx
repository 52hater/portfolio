import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/common/layout/Navbar';
import Footer from './components/common/layout/Footer';
import ScrollToTop from './utils/scrollToTop';
import { AppRoutes } from './utils/router';
import ScrollToTopButton from './components/common/ui/ScrollToTopButton';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="flex flex-col min-h-screen overflow-hidden">
                    <Navbar />
                    <ScrollToTop />
                    <div className="flex-grow">
                        <AppRoutes />
                    </div>
                    <Footer />
                    <ScrollToTopButton />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;