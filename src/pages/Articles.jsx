import React,{useState} from 'react';
import ArticlesPage from './Article/ArticlesPage';
import { Link } from 'react-router-dom';
import FooterPage from '../components/Footer/Footer';
import ArticlesList from './Article/ArticlesList';




const ArticlePage = () => {
 
  return (
    <div>  
      <ArticlesList/>
      <FooterPage/>
    </div>
  );
};

export default ArticlePage;
