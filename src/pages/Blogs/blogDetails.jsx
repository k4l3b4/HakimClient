import React, { useState, useEffect } from 'react';
import { Typography, Input, Button, Form, List, Avatar, Spin, Alert } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URLS } from '../../api/blog';
import FooterPage from '../../components/Footer/Footer';
import RecentBlogs from './recentBlogs'; // Assuming RecentArticles is renamed to RecentBlogs

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentContent, setCommentContent] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(API_URLS.BLOG_BY_ID(id));
        setBlog(response.data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to fetch the blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleAddComment = async () => {
    if (!commentContent.trim()) {
      return; // Prevent submission if the comment content is empty
    }

    try {
      await axios.post(API_URLS.COMMENTS(id), {
        author: commentAuthor.trim() || 'Anonymous',
        content: commentContent.trim(),
      });

      const response = await axios.get(API_URLS.BLOG_BY_ID(id));
      setBlog(response.data);
      setCommentContent('');
      setCommentAuthor('');
    } catch (err) {
      console.error('Error adding comment:', err);
      setError('Failed to add comment. Please try again later.');
    }
  };

  if (loading) return <Spin tip="Loading blog details..." />;
  if (error) return <Alert message="Error" description={error} type="error" />;

  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row">
        {/* Main Blog Content */}
        <div className="md:w-2/3">
          <Title level={1} className="mb-2">{blog.title}</Title>
          <h2 className="text-xl text-gray-600 mb-2">by {blog.author}</h2>
          <img src={blog.image} alt="Blog" className="w-full mb-4" />
          <Paragraph className="text-lg mb-4">{blog.content}</Paragraph>
          <p className="text-md mb-4"><strong>Category:</strong> {blog.category || 'Unknown'}</p>

          <h2 className="text-2xl font-semibold mb-2">Comments</h2>
          <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={blog.comments || []}
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
        {/* Aside for Recent Blogs */}
        <aside className="md:w-1/3 mt-8 md:mt-0 md:pl-5">
          <RecentBlogs /> {/* Assuming the component is renamed accordingly */}
        </aside>
      </div>
      <FooterPage />
    </div>
  );
};

export default BlogDetails;
