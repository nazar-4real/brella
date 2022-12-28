import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../Layout';

import Hero from '../hero/Hero';
import Explore from '../explore/Explore';
import Benefits from '../benefits/Benefits';
import Plan from '../plan/Plan';
import Experience from '../experience/Experience';
import Employers from '../employers/Employers';
import Blog from '../blog/Blog';
import Page404 from '../Shared/Page404';
import Confirmed from '../Shared/Confirmed';

import ErrorBoundary from '../Shared/ErrorBoundary';

import '../../assets/styles/global.scss';

import AppContext from '../../context/AppContext';

const contextValue = {
  darkTheme: 'dark',
  lightTheme: 'light',
  system: 'SYSTEM_THEME'
}

const App = () => {
  console.log("%cBrella business card application", "font-size: 14px; color: darkcyan;");

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="description" content="Brella application" />
        <link rel="icon" href={`${process.env.PUBLIC_URL}/favicon.svg`} />
        <title>Brella</title>
      </Helmet>

      <div className="app">
        <AppContext.Provider value={contextValue}>
          <ErrorBoundary>
            <Router>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Hero />} />
                  <Route path='plan' element={<Plan />} />
                  <Route path='employers' element={<Employers />} />
                  <Route path='benefits' element={<Benefits />} />
                  <Route path='experience' element={<Experience />} />
                  <Route path='explore' element={<Explore />} />
                  <Route path='blog' element={<Blog />} />
                  <Route path='confirmed' element={<Confirmed />} />
                  <Route path='*' element={<Page404 />} />
                </Route>
              </Routes>
            </Router>
          </ErrorBoundary>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
