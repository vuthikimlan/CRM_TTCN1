import React from 'react';
import {
    TeamOutlined, 
    ContactsOutlined,
    DesktopOutlined 
  } from '@ant-design/icons';
import HeaderList from './HeaderList';

function HeaderCout(props) {
    const coutList = [
        {
            id: 1,
            icon: <TeamOutlined/>,
            title: 'Khách hàng',
            amount: 5000,
            date: '12/12/2013'
        },
        {
            id: 2,
            icon: <ContactsOutlined/>,
            title: 'Nhân viên ',
            amount: 500,
            date: '12/12/2013'
        },
        {
            id: 3,
            icon: <DesktopOutlined />,
            title: 'Người hoạt động ',
            amount: 500,
            avatar: 'abcj'
        },
    ]
    return (
        <div>
            
            <HeaderList coutList={coutList}/>
        </div>
    );
}

export default HeaderCout;