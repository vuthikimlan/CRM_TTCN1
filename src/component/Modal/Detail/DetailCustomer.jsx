import {  Descriptions } from 'antd';
import { useEffect, useState } from 'react';
import { getInforCustomer } from '../../../services/lead';
function DetailCustomer() {
  const [dataCustomer, setDataCustomer] = useState({})
  const handleGetInfoCustom = async () =>{
    getInforCustomer().then((res)=>{
      if(res.status === 200) {
        setDataCustomer(res?.data)
      }
    })
  }
  useEffect(() =>{
    handleGetInfoCustom()
  }, [])
  return(
    <>
        <Descriptions title="Thông tin chi tiết của User" layout="vertical"  >     
          <Descriptions.Item label="Id">{dataCustomer?.data?.customerId}</Descriptions.Item>
          <Descriptions.Item label="Name"> {dataCustomer?.data?.customerName} </Descriptions.Item>
          <Descriptions.Item label="Email"> {dataCustomer?.data?.createdDate} </Descriptions.Item>
          <Descriptions.Item label="Ngày sinh"> {dataCustomer?.data?.phone} </Descriptions.Item>
          <Descriptions.Item label="E-mail"> {dataCustomer?.data?.email} </Descriptions.Item>
          <Descriptions.Item label="Ghi Chú"> {dataCustomer?.data?.note} </Descriptions.Item>
          <Descriptions.Item label="Trạng thái"> {dataCustomer?.data?.status?.statusName} </Descriptions.Item>
          <Descriptions.Item label="Tên nhóm khách hàng"> {dataCustomer?.data?.group?.groupName} </Descriptions.Item>
          <Descriptions.Item label="Người quản lý"> {dataCustomer?.data?.group?.user?.userName} </Descriptions.Item>

        </Descriptions>
    </>
  );
} 
export default DetailCustomer;