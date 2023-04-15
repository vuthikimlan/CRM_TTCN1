import { Button, Table,  } from 'antd';
import {FileTextOutlined,  } from '@ant-design/icons'
import {  PageContainer } from '@ant-design/pro-components'
import { useState } from 'react';
import '../TableStaff/Table.css'
import { useLocation, useNavigate } from 'react-router-dom';
import CreateRole from '../../Modal/CreateRole/CreateRole';
// import DetailCustomer from '../../Modal/Detail/DetailCustomer';

const data = [];
for (let i = 0; i < 5; i++){
    data.push({  
      key: i,    
      name: `Trần Hoa Anh`,          //Gọi API 
      id: 1,
      num: 123234,
      email: `anh123@gmail.com`,
      group: `Kinh doanh`,
      tags:['Tiềm năng'],
    });

}
  
function TableContent(props) {
  // const location = useLocation()
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState()
 


  //cột thông tin của bảng
  const columns = [
    {
      title: 'ID',
      dataIndex: ' ',
    },
    {
      title: 'Tên vai trò',
      dataIndex: '',
    },
    {
      title: 'Trạng thái',
      dataIndex: '',
    },
    {
      title: ' Ngày tạo',
      dataIndex: '',
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: '',
      
    },
  ];
  return (
    <div>

      <PageContainer
        title='Danh sách vai trò'
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
              navigate('/adminpage/listuser')
            }}
          >
            <FileTextOutlined />
            Xem người dùng
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
        
        <Table  columns={columns} dataSource={data} />
        
      </PageContainer>
    </div>
  );
};
export default TableContent;