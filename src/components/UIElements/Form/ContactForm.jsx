import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoader } from '../../../redux/loadersSlice';
import { CreateContacts } from '../../../api/contact';

const { TextArea } = Input;

function ContactForm() {
  const [form] = Form.useForm(); // Manage form instance
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onContact = async (values) => {
    try {
      console.log('Submitting form with values:', values);
      dispatch(setLoader(true));
      
      // Call the API to create the contact
      const response = await CreateContacts(values);
      console.log('API response:', response);

      // Check for a successful response
      if (response.success) {
        message.success('Your message has been sent successfully!'); // Custom success message
        form.resetFields(); // Reset form fields if needed
        navigate("/contacts"); // Redirect to the contacts page after successful submission
      } else {
        throw new Error(response.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      message.error(error.message || 'An error occurred while submitting the form');
    } finally {
      dispatch(setLoader(false)); // Ensure loader is turned off in both success and error cases
    }
  };

  return (
    <div className="w-full max-w-md p-8 mx-auto bg-gray-900 rounded-lg shadow-lg w-[450px]">
      <Form
        form={form} // Pass form instance
        layout="vertical"
        onFinish={onContact}
      >
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: 'Please enter your Full Name' }]}
        >
          <Input
            placeholder="Full Name"
            className="bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-orange-600"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'The input is not valid E-mail!' },
          ]}
        >
          <Input
            placeholder="Email"
            className="bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-orange-600"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="subject"
          rules={[{ required: true, message: 'Please enter a subject' }]}
        >
          <Input
            placeholder="Subject"
            className="bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-orange-600"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <TextArea
            placeholder="Write Message"
            className="bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-orange-600"
            rows={4}
          />
        </Form.Item>
        <Button
          type="primary"
          className="bg-orange-600 border-none hover:bg-orange-700"
          size="large"
          htmlType="submit"
        >
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
