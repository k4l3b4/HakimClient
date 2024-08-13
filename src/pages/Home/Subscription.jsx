import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { sendEmail } from '../../api/subscribe'; // Ensure the path is correct

const SubscriptionForm = () => {
  const [form] = Form.useForm();

  const onSubscribe = async (values) => {
    try {
      console.log('Attempting to subscribe with values:', values);
      await sendEmail(values);
      notification.success({
        message: 'Subscription Successful',
        description: `You have successfully subscribed with email: ${values.email}`,
      });
      form.resetFields();
    } catch (error) {
      console.error('Subscription error:', error); // Log the error for debugging
      notification.error({
        message: 'Subscription Failed',
        description: `There was an error with your subscription: ${error.message || 'Please try again later.'}`,
      });
    }
  };

  return (
    <div className="bg-gray-100 py-8 flex justify-center">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Free WebHakimEthio Newsletters</h2>
        <Form
          form={form}
          name="subscription"
          onFinish={onSubscribe}
          className="subscription-form bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
              className="flex-grow"
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                className="rounded-md"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="rounded-md">
                Subscribe
              </Button>
            </Form.Item>
          </div>
          <p className="text-sm font-sans">
            By clicking Subscribe, I agree to the WebHakim Terms & Conditions and Privacy Policy and understand that I may opt out of WebHakim subscriptions at any time.
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
