import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './login.css'

function ForgotPassword(props) {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='loginpage'> 
      <div className='logo'>
        <img src="logocrm1.png" alt="" className='logo_img'/>
        <div className='title_logo'>
          <h1>MLL CRM</h1>
          <p>Bring success to you</p>
        </div>
      </div>
      <Form
        name="normal_login"
        className="login-form forgot-pass"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
          <p>Quên mật khẩu?</p>
          <span>Điền vào e-mail của bạn để lấy lại mật khẩu.</span>

          <Form.Item
            className='login'
            name="email"
            rules={[
              {
                type: 'email',
                message: 'E-mail không hợp lệ',
              },
              {
                required: true,
                message: 'Vui lòng nhập E-mail của bạn',
              },
            ]}
      >
        <Input 
            className='input'
            prefix={<MailOutlined />}
            placeholder="E-mail"
        />
      </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button button">
            Gửi
          </Button>
        </Form.Item>

      </Form>
    </div>
  
  );
};

export default ForgotPassword;
