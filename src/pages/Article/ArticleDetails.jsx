import React, { useState, useEffect } from 'react';
import { Typography, Input, Button, Form, List, Avatar } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URLS } from '../../api/apiConfig';
import FooterPage from '../../components/Footer/Footer';
import RecentArticles from './RecentArticles';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentContent, setCommentContent] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(API_URLS.ARTICLE_BY_ID(id));
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleAddComment = async () => {
    try {
      await axios.post(API_URLS.COMMENTS(id), {
        author: commentAuthor || 'Anonymous',
        content: commentContent,
      });

      const response = await axios.get(API_URLS.ARTICLE_BY_ID(id));
      setArticle(response.data);
      setCommentContent('');
      setCommentAuthor('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!article) return <div>Article not found</div>;

  return (
    <div>
    <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row">
        {/* Main Article Content */}
      <div className="md:w-2/3 ">
      <Title level={1} className="mb-2">{article.title}</Title>
      <h2 className="text-xl text-gray-600 mb-2">by {article.author}</h2>
      <img src={article.image} alt="Article" className="w-full mb-4" />
      <Paragraph className="text-lg mb-4">{article.content}</Paragraph>
      <p className="text-md mb-4"><strong>Category:</strong> {article.category || 'Unknown'}</p>

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
        onFinish={handleAddComment}
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
         {/* Aside for Recent Articles */}
         <aside className="md:w-1/3 mt-8 md:mt-0 pl-5">
          <RecentArticles />
        </aside>
      </div>
      <FooterPage/>
    </div>
  );
};

export default ArticleDetails;
