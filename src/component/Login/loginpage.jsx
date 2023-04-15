import React from 'react';
import { Form, Outlet } from 'react-router-dom';
import './login.css';

function Loginpage(props) {
    return (
        <div>
            <div className='logo'>
                <img src="logocrm1.png" alt="" className='logo_img'/>
                <div className='title_logo'>
                    <h1>MLL CRM</h1>
                    <p>Bring success to you</p>
                </div>
            </div>
            <Form>
                <Outlet/>
            </Form>
        </div>
    );
}

export default Loginpage;