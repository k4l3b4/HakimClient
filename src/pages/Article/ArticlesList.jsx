import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, List, Avatar, Input, Button, Form } from 'antd';
import axios from 'axios';
import { API_URLS } from '../../api/apiConfig';


const { Title } = Typography;
const { TextArea } = Input;

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [commentContent, setCommentContent] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(API_URLS.ARTICLES);
        setArticles(response.data || []);
        setFilteredArticles(response.data || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredArticles(articles.filter(article => article.category === selectedCategory));
    } else {
      setFilteredArticles(articles);
    }
  }, [selectedCategory, articles]);

  const handleAddComment = async (articleId) => {
    try {
      await axios.post(API_URLS.COMMENTS(articleId), {
        author: commentAuthor || 'Anonymous',
        content: commentContent,
      });

      // Refresh the articles list to include the new comment
      const response = await axios.get(API_URLS.ARTICLES);
      setArticles(response.data || []);
      setCommentContent('');
      setCommentAuthor('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      <div className="w-3/4 p-4">
        {filteredArticles.map(article => (
          <div key={article._id} className="mb-12">
            <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">by {article.author}</h2>
            <img src={article.image} alt="Article" className="mb-4" />
            <p className="text-lg mb-4">
              {article.content.substring(0, 150)}...
              <Link to={`/article/${article._id}`} className="text-blue-500 hover:underline ml-2">Read More</Link>
            </p>
            <p className="text-md mb-4"><strong>Category:</strong> {article.category}</p>
            
            <h2 className="text-2xl font-semibold mb-2">Comments</h2>
            <List
              className="comment-list"
              itemLayout="horizontal"
              dataSource={article.comments || []}
              renderItem={comment => (
                <List.Item key={comment._id}>
                  <List.Item.Meta
                    avatar={<Avatar>{comment.author.charAt(0)}</Avatar>}
                    title={comment.author}
                    description={comment.content}
                  />
                </List.Item>
              )}
            />

            <Form
              onFinish={() => handleAddComment(article._id)}
              className="mt-4"
            >
              <Form.Item>
                <Input
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  placeholder="Your name (optional)"
                  className="mb-2"
                />
                <TextArea
                  rows={4}
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  placeholder="Add a comment"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add Comment
                </Button>
              </Form.Item>
            </Form>
          </div>
        ))}
      </div>
      <div className="w-1/4 p-4">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        {loading ? (
          <p>Loading categories...</p>
        ) : articles.length > 0 ? (
          <ul>
            {Array.from(new Set(articles.map(article => article.category))).map((category, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  onClick={() => handleCategoryClick(category)}
                  className={`text-blue-500 hover:underline ${selectedCategory === category ? 'font-bold' : ''}`}
                >
                  {category}
                </a>
              </li>
            ))}
            <li className="mb-2">
              <a
                href="#"
                onClick={() => handleCategoryClick(null)}
                className={`text-blue-500 hover:underline ${selectedCategory === null ? 'font-bold' : ''}`}
              >
                All Categories
              </a>
            </li>
          </ul>
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default ArticlesList;
