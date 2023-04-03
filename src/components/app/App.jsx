import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ErrorBoundary from '../shared/ErrorBoundary';

import { ThemeStore } from 'src/context/ThemeContext';

import Layout from '../Layout';
import Confirmed from '../shared/Confirmed';

import HomePage from 'src/pages/HomePage';
import PlanPage from 'src/pages/PlanPage';
import EmployersPage from 'src/pages/EmployersPage';
import BrokersPage from 'src/pages/BrokersPage';
import MembersPage from 'src/pages/MembersPage';
import AboutPage from 'src/pages/AboutPage';
import BlogPage from 'src/pages/BlogPage';
import ContactPage from 'src/pages/ContactPage';
import NotFoundPage from 'src/pages/NotFoundPage';

import 'src/assets/styles/global.scss';

const App = () => {
  console.log("%cBrella - the simple SPA", "font-size: 14px; color: darkcyan;");

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="description" content="Brella application" />
        <link rel="icon" href={`${process.env.PUBLIC_URL}/favicon.svg`} />
      </Helmet>

      <div className="app">
        <ErrorBoundary>
          <ThemeStore>
            <Router>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path='plan' element={<PlanPage />} />
                  <Route path='employers' element={<EmployersPage />} />
                  <Route path='brokers' element={<BrokersPage />} />
                  <Route path='members' element={<MembersPage />} />
                  <Route path='about' element={<AboutPage />} />
                  <Route path='blog' element={<BlogPage />} />
                  <Route path='contact' element={<ContactPage />} />
                  <Route path='confirmed' element={<Confirmed />} />
                  <Route path='*' element={<NotFoundPage />} />
                </Route>
              </Routes>
            </Router>
          </ThemeStore>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
