import React from 'react';
import ArticleCard from './Card'; 
import { Typography } from 'antd';
const { Title } = Typography;
const myArticles = [
  { category: 'Business' },
  { category: 'Podcast' },
];

const Categories = () => {
  return (
    <div>
    <Title level={1} className='text-right font-normal'>Category</Title>
    <div className="grid grid-cols pl-80">
          {myArticles.map((article) => (
          <ArticleCard key={article.category} {...article} />
      ))}
    </div>
    </div>
  );
};

export default Categories;
