import React from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import HakimPodcast from './pages/Hakim';
import Articles from './pages/Articles';
import ArticleDetails from './pages/Article/ArticleDetails';
import ScholarShipGallery from './pages/Opportunity/ScholarShip';
import Vacancy from './pages/Opportunity/Vacancy';
import PartnerPage from './pages/Contact/Partner';
import BlogsPage from './pages/BlogsPage';
import Contacts from './pages/Contact/Contact';
import Bio from './pages/Article/Bio';
import HistoryPage from './pages/Article/History';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(30,30,30)",
          },
          components: {
            Input: {
              boxShadow: "0 0 0 1px rgba(3, 3, 3, 0.3)",
              activeShadow: "0 0 0 1px rgba(3, 3, 3, 0.5)",
            },
            Select: {
              boxShadow: "0 0 0 1px rgba(3, 3, 3, 0.64)",
              boxShadowSecondary: "0 0 0 1px rgba(3, 3, 3, 0.64)",
              boxShadowTertiary: "0 0 0 1px rgba(3, 3, 3, 0.64)",
            },
          },
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakimPodcast" element={<HakimPodcast />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/articles">
              <Route index element={<Articles />} />
              <Route path="bio" element={<Bio />} />
              <Route path="history" element={<HistoryPage />} />
            </Route>
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/opportunity">
              <Route path="vacancy" element={<Vacancy />} />
              <Route path="scholarship" element={<ScholarShipGallery />} />
            </Route>
            <Route path="/contacts">
              <Route index element={<Contacts />} />
              <Route path="partner" element={<PartnerPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
