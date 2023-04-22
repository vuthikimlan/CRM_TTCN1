import React, { useEffect, useState } from 'react';
import './AdminPage.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import {
    TeamOutlined, 
    ContactsOutlined,
    UserSwitchOutlined,
    BarChartOutlined,
    LogoutOutlined,
    UserOutlined
  } from '@ant-design/icons';
  import { Layout, Menu, Input, Drawer, Dropdown, Button, Space } from 'antd';
// import { MyContext } from '../../Context'; //////////
// import { debounce } from "lodash";
import ProfileUser from './ProfileUser/ProfileUser';

  const { Header, Content, Sider } = Layout;

function AdminPage(props) {
  const navigate = useNavigate()
  const location = useLocation()
  const [openDrawer, setOpenDrawer] = useState()
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState()

  // tìm kiếm:
  // const [datas, setDatas] = useState()
  // const [searchTerm, setSearchTerm] = useState('');
  // const [tableData, setTableData] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
  // const handleSearch = debounce((value) => {
  //   setSearchTerm(value);
  //   const results = datas.filter((item) =>
  //     item.title.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setSearchResults(results);
  // }, 300);
  // const handleChange = (event) => {
  //   handleSearch(event.target.value);
  // };

  // Ham giu nguyen trang khi tai lai 

  useEffect(() =>{
    // setSelectedKey([location.pathname]);
    const pathname = location.pathname;
    switch(pathname){
      case '/adminpage/staff':
        setDefaultSelectedKeys(['staff']);
        break;
      case'/adminpage/customer':
        setDefaultSelectedKeys(['customer']);
        break;
      case'/adminpage/listrole':
        setDefaultSelectedKeys(['listrole']);
        break;
      default: 
        setDefaultSelectedKeys([]);
        break;
    }
  }, [location.pathname])


  const listItem = [
    {
      label: 'Nhân viên',
      key: '1',
      icon:<TeamOutlined />,
      onClick:() =>{
       
        navigate('/adminpage/staff')
      }

    },
    {
      label: 'Khách hàng',
      key: '2',
      icon:<ContactsOutlined />,
      onClick:() =>{
       
        navigate('/adminpage/customer')
      }
      
    },
    {
      label: 'phân quyền',
      key: '3',
      icon:<UserSwitchOutlined />,
      onClick:() => {
        navigate('/adminpage/listrole')
      }
      
    },
    {
      label: 'Thống kê',
      key: '4',
      icon:<BarChartOutlined />,
      
    },
  
  ];

  const items = [
    {
      icon: <UserOutlined />,
      label: 'Hồ sơ',
      key: '1',
      onClick: () =>{
        setOpenDrawer(true)
                         
      }
    },

    {
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      key: '2',
      onClick: () =>{
        
      }
    }

  ]

      return (
        <div className='abc'>
          <Layout className='layout'>
            <Sider
              theme="light"
              className='sider'
            >
              <div className="logo1"  >
                <img src="logo.png"  alt="" className='logo1_img' />
              </div>
              
              <Menu className='menu_items'
                  mode="inline"
                  items={listItem}
                  defaultSelectedKeys={defaultSelectedKeys}
                  // onClick={e => setSelectedKey([e.key])}
                  // selectedKeys={selectedKey}
              />
            </Sider>

            <Layout className="site-layout">
              <Header className='header'>
                <div className='header_items'>
                    <p>Xin chào Admin 👋🏼,</p>
                  <div className='btn'>

                    {/* ///////////////////////// */}
                    {/* Tìm kiếm nhân viên */}
                  <Input.Search 
                    style={{marginTop: 3}}  
                    placeholder="input search text"  
                    enterButton />
                  {/* onSearch={onSearch} */}
                    {/* /////////////////////// */}
                    <Dropdown
                      menu={{items}}
                    >
                    <div style={{marginBottom: 10, display: 'flex'}}>
                      <UserOutlined 
                        className='icon_admin'
                      />
                      <p className='title_admin'>Admin</p>

                    </div>

                    </Dropdown>
                  </div>
                </div>
                {/* <div className='cout'>
                  <HeaderCout></HeaderCout>
                </div> */}
              </Header>
              <Content className='content'>
                <div style={{
                    textAlign: 'center',
                  }}
                >
                  {/* /////////////////////////////// */}
                  {/* <TableCustomer/> */}
                  {/* <MyContext.Provider value={{ datas, setDatas, tableData, setTableData }}> */}
                    <Outlet/>
                  {/* </MyContext.Provider> */}
                  {/* <TableContent/>   */}

                  {/* ////////////////////////////// */}
                </div>
              </Content>
            </Layout>
           
          </Layout>
          <Drawer
            title="Hồ Sơ"
            open={openDrawer}
            onClose={() =>{setOpenDrawer(false)}} 
            
          >
              <ProfileUser/>
          </Drawer>
        </div>

      );
};

export default AdminPage;