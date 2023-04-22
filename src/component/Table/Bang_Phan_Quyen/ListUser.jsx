import { Button, Table,  Drawer, Space} from 'antd';
import {FileTextOutlined,  } from '@ant-design/icons'
import {  PageContainer } from '@ant-design/pro-components'
import { useState } from 'react';
import '../TableStaff/Table.css'
import { useNavigate } from 'react-router-dom';
import CreateRole from '../../Modal/CreateRole/CreateRole';
import DetailUser from './DetailUser/DetailUser';
// import DetailCustomer from '../../Modal/Detail/DetailCustomer';

const data = [];
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    customerName: 'Vũ Trần Yến Nhi',
    phone: 1232434,
    email: 'nhi45@gmail.com',
    userName: 'Nguyễn Thị Liên',
    tags:['Đang tư vấn']
  });
}

function ListUser(props) {
  // const location = useLocation()
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState()
  const  [openDrawer, setOpenDrawer] = useState()

   


  //cột thông tin của bảng
  const columns = [
    {
      title: 'Tên người dùng',
      dataIndex: ['data', 'items', 'userName'],
    },
    {
      title: 'Vai trò',
      dataIndex: ['data', 'items', 'role', 'roleName'],
      // dataIndex: '',
    },
    {
      title: 'Quyền',
      render: () =>(
        <Button className='detailRoleUser'
          // onClick={
          //   setOpenDrawer(true)
          // }
        >
          Xem chi tiết
        </Button>
      )
    },
    {
      title: ' Email',
      dataIndex: ['data', 'items', 'email'],
      // dataIndex: '',
    },
    
  ];
  return (
    <div>

      <PageContainer
        title='Danh sách người dùng'
        // className='Pagecontainer'
        extra={[
          <Button
            className='button_add_member'
            onClick={() =>{
              setOpenModal(true)
            }}
          >
            + Tạo Vai trò
          </Button> ,
          <Button 
          onClick={()=>{
            navigate('/adminpage/listrole')
          }}
        >
          <FileTextOutlined />
          Xem vai trò
        </Button>
        ]
        }
      >
        

        <CreateRole
          openModal={openModal}
          onOpenChange = {(open) =>{
            if(!open) {
              setOpenModal(false)
            }
          }}
        />
        
        <Table columns={columns} dataSource={data} />

        <Drawer 
          title="Basic Drawer" 
          placement="right" 
          onClose={()=>{setOpenDrawer(false)}} 
          open={openDrawer}>
        
      </Drawer>
       
      </PageContainer>
    </div>
  );
};
export default ListUser;