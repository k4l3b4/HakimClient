import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoader } from '../../../redux/loadersSlice';
import { CreatePartners } from '../../../api/partners';

const { TextArea } = Input;

const PartnerForm = () => {
  const [form] = Form.useForm(); // Manage form instance
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onPartner = async (values) => {
    try {
      console.log('Submitting form with values:', values);
      dispatch(setLoader(true));
      
      // Call the API to create the partner
      const response = await CreatePartners(values);
      console.log('API response:', response);
  
      // Check for a successful response
      if (response?.success) {
        message.success('Your message has been sent successfully!'); // Custom success message
        form.resetFields(); // Reset form fields if needed
        navigate("/contacts/partner"); // Redirect to the contacts page after successful submission
      } else {
        throw new Error(response?.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      message.error(error?.message || 'An error occurred while submitting the form');
    } finally {
      dispatch(setLoader(false)); // Ensure loader is turned off in both success and error cases
    }
  };
  
  return (
    <div className="w-full md:w-auto space-y-6 max-w-md  w-[450px]">
      <Form
        form={form} // Pass form instance
        layout="vertical"
        onFinish={onPartner}
      >
        <Form.Item
          name="companyName"
          rules={[{ required: true, message: 'Please enter your Company Name' }]}
        >
          <Input 
            placeholder="Company Name" 
            className="bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-orange-600"
            size="large" 
          />
        </Form.Item>
        
        <Form.Item
          name="email"
        >
          <Input 
            placeholder="Email (Optional)" 
            className="bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-orange-600"
            size="large" 
          />
        </Form.Item>
        
        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Please enter your Phone' }]}
        >
          <Input 
            placeholder="Phone" 
            className="bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-orange-600"
            size="large" 
          />
        </Form.Item>
        
        <Form.Item
          name="website"
        >
          <Input 
            placeholder="Website (Optional)" 
            className="bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-orange-600"
            size="large" 
          />
        </Form.Item>
        
        <Form.Item
          name="description"
          rules={[{ required: true, message: 'Please enter your Description about the company' }]}
        >
          <TextArea 
            placeholder="Description About Company" 
            className="bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-orange-600"
            rows={4} 
          />
        </Form.Item>
        
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit"
            className="bg-orange-600 border-none hover:bg-orange-700"
            size="large"
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PartnerForm;
