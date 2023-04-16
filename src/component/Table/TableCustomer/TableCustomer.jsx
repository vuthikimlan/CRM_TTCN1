import { Button,  Dropdown,  Space, Table, Tag, Modal, Drawer, Popover } from 'antd';
import {FilterOutlined, MoreOutlined } from '@ant-design/icons'
import {  PageContainer } from '@ant-design/pro-components'
import { useContext, useEffect, useState } from 'react';
import '../TableStaff/Table.css'
import {  useNavigate } from 'react-router-dom';
import AddCustomer from '../../Modal/Add/AddCustomer';
import {CloseOutlined, } from  '@ant-design/icons';
import DetailCustomer from '../../Modal/Detail/DetailCustomer';
import { delAllCustomer, delCustomer, getListCustomer } from '../../../services/lead';
import { MyContext } from '../../../Context';
// import DetailCustomer from '../../Modal/Detail/DetailCustomer';

function TableContent(props) {
  // const location = useLocation()
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState()
  const  [openDrawer, setOpenDrawer] = useState()
  const [loading, setLoading] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataCustomer, setDataCustomer] = useState([])
  const [isChecked, setIsChecked] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState({})
  const { confirm } = Modal;

  // ///////////////////
  // const {datas, setDatas} = useContext(MyContext)
  // const {tableData, setTableData} = useContext(MyContext)

  // //////////////////

  const onSelectChange = (newSelectedRowKeys) => {
    // console.log(newSelectedRowKeys);
    setIsChecked(!isChecked)
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }; 
  // console.log("abc:: ",selectedRowKeys);
  
  // khi select sẽ hiện thị chọn bao nhiêu 
  const hasSelected = selectedRowKeys.length > 0

  
  
  const showhowConfirm = () => {
    confirm({
      title: 'Xoá khách hàng ',
      content: 'Việc này sẽ xóa khách hàng được chọn. Bạn có chắc chắn muốn xóa?',
      onOk() {
          handleDeleteAll(selectedRowKeys)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };


  const onClose = () =>{
    setOpenDrawer(false)
  }

  //Hàm lấy thông tin của khách hàng
  const handleGetCustomer = () =>{
    setLoading(true)
    getListCustomer().then((res) =>{
      setDataCustomer(res?.data?.items)
      // console.log(setDataCustomer(res?.data?.items));
    }).finally(() =>{
      setLoading(false)
    })
  }

  // Hàm xóa từng khách hàng
  const handleDelete = (id) =>{
    delCustomer(id).then((res)=>{
      if(res.status === 200) {
        handleGetCustomer()
      }
    })
  }
  // Hàm xóa tất cả các khách hàng
  const handleDeleteAll = (selectedRowKeys) =>{
    delAllCustomer(selectedRowKeys).then((res)=>{
      if(res.status === 200) {
        handleGetCustomer()
      }
    })
  }
  

  //sử dụng để gửi yêu cầu API khi trang thay đổi
  useEffect(() =>{
    handleGetCustomer()
    setLoading(false)
  },[])

//  RUD
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
      // **********************************
      onClick: (id) =>{
        setCurrentCustomer(id);
        setOpenModal(true)
      }
      // ********************************
      
    },
    // /////////////////////////////
    {
      key: '3',
      label:'Xoá',
      onClick: (id) =>{
        handleDelete(id.id)

      }
      // //////////////////////////
    },
  
  ];

  //cột thông tin của bảng
  const columns = [
    {
      title: 'Tên khách hàng',
      dataIndex: ['data','items','customerName'],
    },
    
    {
      title: 'Số điện thoại',
      dataIndex: ['data','items','phone'],

    },
    {
      title: 'Email',
      dataIndex: ['data','items','email'],
    },
    {
      title: 'Người quản lý',
      dataIndex: ['data','items','group','user','userName'],
    },
    
    {
      title: 'Trạng thái',
      dataIndex: ['data','items','status', 'statusName'],
      render: (_, { tags }) => (
        <>
          <Space> 
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              return (
                <Tag color={color} key={tag}  >
                  {tag}
                </Tag> 
              );
            })}
            
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
        title='Tất cả khách hàng'
        // className='Pagecontainer'
        extra={[
          <Button
            className='button_add_member'
            onClick={() =>{
              setOpenModal(true)
            }}
          >
            + Thêm Khách Hàng
          </Button> ,
         
          <Popover 
            placement="bottom" 
          >
            <Button  className='filter'> 
              <FilterOutlined /> 
              Lọc
            </Button>
        </Popover>
        ]}
      >
        {/* Thêm Khách hàng */}
        <AddCustomer 
          onSuccess={() =>{
            handleGetCustomer();
            setOpenModal(false)
          }}
          openModal={openModal}
          onOpenChange = {(open) =>{
            if(!open) {
              setOpenModal(false)
              setCurrentCustomer({})
            }
          }}
          data={currentCustomer}
        />
       {/* Hiển thị thông tin chi tiết của khách hàng */}
        <Drawer
          title="Thông tin chi tiết của khách hàng"
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
            <DetailCustomer/>
          </Drawer>

        <Table 
          rowSelection={rowSelection} 
          columns={columns} 
          dataSource={dataCustomer} 
          // dataSource={data}
          size='middle' 
          loading={loading}
          
          />

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