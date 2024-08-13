import { axiosInstance } from './axiosInstance';

const BASE_URL = ""

// Export endpoints and base URL
export const API_URLS = {
  BLOGS: `${BASE_URL}/blogs`,
  Blog_BY_ID: (id) => `${BASE_URL}/blogs/${id}`,
  COMMENTS: (blogId) => `${BASE_URL}/blogs/${blogId}/comments`,
};

// Register blogs
export const CreateBlogs = async (payload) => {
  try {
    const response = await axiosInstance.post(`api/blogs/`); // Added semicolon
    return response.data;
  } catch (error) {
    return error.message; // You may want to consider a more robust error handling approach
  }
};

// get blogs
export const GetBlogs = async () => {
  try {
    const response = await axiosInstance.post(`api/blogs/`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Get Current blogs
export const GetBlogsById = async (id) => {
  try {
    const response = await axiosInstance.post(`/api/blogs/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//update blogs 
export const UpdateBlogs=async(id)=>{
  try{
    const response =await axiosInstance.put(`/api/blogs/${id}`);
    return response.data;
  }
  catch(error){
    return error.message;
  }
};

//delete a Blog
export const DeleteBlogs=async (id)=>{
  try{
      const response=await axiosInstance.delete(`/api/blogs/${id}`)
      return response.data;
  }
  catch(error){
      return error.message;
  }
}