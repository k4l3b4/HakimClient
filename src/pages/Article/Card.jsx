import React from 'react';
import { Tag, Tooltip } from 'antd';
import { MessageOutlined } from '@ant-design/icons'; // Import icons

const ArticleCard = ({ category }) => (
  <div className="mb-4 p-4  flex justify-between items-center"> 
    <div className="flex"></div> {/* Empty space to push category & icon to the right */}
    <Tooltip placement="top" title={category}>
      {category === 'Business' && <MessageOutlined />}  {/* Render icon for Business */}
      {category === 'Podcast' && <MessageOutlined />}  {/* Render icon for Podcast */}
    </Tooltip>
    <Tag color="default" className="ml-2"> {/* Add margin for spacing */}
      {category}
    </Tag>
  </div>
);

export default ArticleCard;
