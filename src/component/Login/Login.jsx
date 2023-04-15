import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './login.css';
import {  useNavigate } from 'react-router-dom';
// import ForgotPassword from './ForgotPassword';

function Login(props) {
  const navigate = useNavigate();

  const handleForgotpass = () => {
    navigate('/forgotpassword')
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    navigate('/adminpage')
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
        className="login-form"
        initialValues={{ remember: true }}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      >
          <p >Đăng Nhập</p>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Tên tài khoản tối thiểu 4-6 ký tự' }]}
          className='login'
        >
          <Input 
              className='input'
              prefix={<UserOutlined className="site-form-item-icon" />} 
              placeholder="Tên tài khoản" />
              
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Mật khẩu phải tối thiểu 8 ký tự từ A-Z, a-z, 0-9, @,/,*' }]}
          className='login'
        >
          <Input.Password
              className='input'
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="Mật khẩu"
              placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button button">
            Đăng nhập
          </Button>
        </Form.Item>

        <Form.Item>
        <Button 
          type="link" 
          htmlType="submit" 
          className='login-form-forgot'
          onClick={() => {
            handleForgotpass()
          }}
        >
          Quên mật khẩu
        </Button>
        </Form.Item>
    </Form>
    
    </div>
  
  );
};

export default Login;
