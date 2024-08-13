import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, List, Avatar, Input, Button, Form, Spin } from 'antd';
import axios from 'axios';
import { API_URLS } from '../../api/blog';

const { TextArea } = Input;

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [commentContent, setCommentContent] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API_URLS.BLOGS);
        setBlogs(response.data || []);
        setFilteredBlogs(response.data || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredBlogs(
        blogs.filter(blog =>
          blog.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
        )
      );
    } else {
      setFilteredBlogs(blogs);
    }
  }, [selectedCategory, blogs]);

  const handleAddComment = async (blogId) => {
    try {
      await axios.post(API_URLS.COMMENTS(blogId), {
        author: commentAuthor.trim() || 'Anonymous',
        content: commentContent.trim(),
      });

      // Refresh the specific blog's comments without re-fetching all blogs
      const updatedBlogs = blogs.map(blog =>
        blog._id === blogId
          ? { ...blog, comments: [...(blog.comments || []), { author: commentAuthor, content: commentContent }] }
          : blog
      );
      setBlogs(updatedBlogs);
      setFilteredBlogs(updatedBlogs);
      setCommentContent('');
      setCommentAuthor('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (loading) return <Spin tip="Loading blogs..." />;

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-3/4 p-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div key={blog._id} className="mb-12">
              <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
              <h2 className="text-xl text-gray-600 mb-2">by {blog.author}</h2>
              <img src={blog.image} alt="Blog" className="mb-4" />
              <p className="text-lg mb-4">
                {blog.content.substring(0, 150)}...
                <Link to={`/blog/${blog._id}`} className="text-blue-500 hover:underline ml-2">Read More</Link>
              </p>
              <p className="text-md mb-4"><strong>Category:</strong> {blog.category}</p>
              
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
                onFinish={() => handleAddComment(blog._id)}
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
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>
      <div className="w-full md:w-1/4 p-4">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <ul>
          {Array.from(new Set(blogs.map(blog => blog.category))).map((category, index) => (
            <li key={index} className="mb-2">
              <button
                onClick={() => handleCategoryClick(category)}
                className={`text-blue-500 hover:underline ${selectedCategory === category ? 'font-bold' : ''}`}
              >
                {category}
              </button>
            </li>
          ))}
          <li className="mb-2">
            <button
              onClick={() => handleCategoryClick(null)}
              className={`text-blue-500 hover:underline ${selectedCategory === null ? 'font-bold' : ''}`}
            >
              All Categories
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BlogsList;
