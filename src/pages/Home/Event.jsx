import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const episodes = [
  {
    videoId: 'https://www.youtube.com/watch?v=moGKHUi8dqQ', 
    title: 'የኢትዮጵያ ከተማ ግንባታ እና ፋብሪካ',
    description: 'የኢትዮጵያ ከተማ ግንባታ እና ፋብሪካ',
  },
  {
    videoId: 'https://www.youtube.com/watch?v=moGKHUi8dqQ', 
    title: 'ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ',
    description: 'ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ እና ማርኬቲንግ',
  },
  {
    videoId: 'https://www.youtube.com/watch?v=cGjuPbAWVzU', 
    title: 'ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ',
    description: 'ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ እና ማርኬቲንግ',
  },
  {
    videoId: 'https://www.youtube.com/watch?v=cGjuPbAWVzU', 
    title: 'ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ',
    description: 'ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ እና ማርኬቲንግ',
  },
  
];

const EpisodeCard = ({ videoId, title, description, onClick }) => (
  <Card
    hoverable
    onClick={onClick}
    className="w-full flex flex-col justify-between"
    style={{ height: '100%' }}
  >
    <iframe
      className="w-full h-48 mb-4"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>
    <div className="flex flex-col flex-grow">
      <Link to={`/episode/${title}`} className="text-lg font-bold mb-2">
        {title}
      </Link>
      <p>{description}</p>
    </div>
  </Card>
);

const EpisodesGrid = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    navigate(`/episode/${title}`);
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold mb-8">Explore all episodes</h2>
      <div className="max-w-6xl mx-auto">
        <Row gutter={[16, 16]}>
          {episodes.map((episode, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} className="flex">
              <EpisodeCard
                videoId={episode.videoId}
                title={episode.title}
                description={episode.description}
                onClick={() => handleCardClick(episode.title)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default EpisodesGrid;
