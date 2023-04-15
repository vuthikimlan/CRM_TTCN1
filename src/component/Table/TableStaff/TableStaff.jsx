import { Button, Modal, Dropdown, Space, Table, Popover, Drawer } from 'antd';
import {FilterOutlined, MoreOutlined, CloseOutlined } from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-components'
import { useState } from 'react';
import './Table.css'
import AddStaff from '../../Modal/Add/AddStaff';
import { useLocation, useNavigate } from 'react-router-dom';


function TableContent(props) {
  // const location = useLocation()
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState()
  const [openDrawer, setOpenDrawer] = useState()
  const [dataStaff, setDataStaff] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const { confirm } = Modal;
  
  const onSelectChange = (newSelectedRowKeys) => {
    setIsChecked(!isChecked)
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // const handleCheckUrl = () =>{
  //   if(location.pathname.includes('/adminpage/staff/detailstaff'))
  //   {
  //     setOpenDrawer(true)
  //   }
  // }
  
  // khi select sẽ hiện thị chọn bao nhiêu 
  const hasSelected = selectedRowKeys.length > 0

  const showhowConfirm = () => {
    confirm({
      title: 'Xoá khách hàng ',
      content: 'Việc này sẽ xóa khách hàng được chọn. Bạn có chắc chắn muốn xóa?',
      onOk() {
          // handleDeleteAll(selectedRowKeys)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const onClose = () =>{
    setOpenDrawer(false)
  }

  const items = [
    {
      key: '1',
      label:'Thông tin chi tiết',
      onClick: () =>{
        setOpenDrawer(true)
        
      }

    },
    {
      key: '2',
      label:'Chỉnh sửa',
      onClick: (id) =>{
        setOpenModal(true)
      }
    },
    {
      key: '3',
      label:'Xoá'
    },
  
  ];

  //cột thông tin của bảng
  const columns = [
    {
      title: 'Mã nhân viên',
      dataIndex: ['data','items','userId'],

    },
    {
      title: 'Tên nhân viên',
      dataIndex: ['data','items','userName'],

    },
    {
      title: 'Ngày tạo',
      dataIndex: ['data','items','date'],
    },
    {
      title: 'Email',
      dataIndex: ['data','items','email'],

    },
    {
      title: 'Action',
      render: () => (
        <>
          <Space> 
            <Dropdown
              className='dropdown'
              menu={{items}}
              trigger={['click']}
            >
                {/* Khi click vào icon moreOutLine thì hiện ra các lựa chọn */}
                <Button className='more_option'
                  onClick={(e) => e.preventDefault()}
                >
                    <MoreOutlined/>
                </Button>
            </Dropdown>
          </Space>
        </>
      ),
    },

  ];
  return (
    <div>

      <PageContainer

        title='Tất cả nhân viên'
        // className='Pagecontainer'
        extra={[
          <Button
            className='button_add_member'
            onClick={() =>{
              setOpenModal(true)
            }}
          >
            + Thêm Nhân viên
          </Button> ,
          <Popover  placement="bottom" >
              <Button  className='filter'> 
                <FilterOutlined /> 
                Lọc
              </Button>
          </Popover>
        ]}
      >
        
        <AddStaff 
          openModal={openModal}
          onOpenChange = {(open) =>{
            if(!open) {
              setOpenModal(false)
            }
          }}
        />
        <Table 
          rowSelection={rowSelection} 
          columns={columns} 
          dataSource={dataStaff} 
          size='middle' 
        />
          {/* <Drawer
            title="Thông tin chi tiết của nhân viên" 
            placement="right" 
            open={openDrawer}
            onClose={() => {setOpenDrawer(false)}}
          >

          </Drawer> */}
           <Drawer
          title="Thông tin chi tiết của nhân viên"
          width={700}
          open={openDrawer}
          onClose={onClose}
          extra={
            <Space>
              <Button onClick={onClose}>Quay lại</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
          >
          </Drawer>
          <div className='edit' style={{ display: hasSelected ? "block" : "none" }}> 
          {/* style={{ display: isChecked ? "block" : "none" }} */}
           <>đã chọn {selectedRowKeys.length}</>
          <Button 
            className='button_edit'
            onClick={() =>{
              showhowConfirm();

            }}
          >
            <CloseOutlined />
            Xoá
          </Button>
          
        </div> 

      </PageContainer>
    </div>
  );
};
export default TableContent;