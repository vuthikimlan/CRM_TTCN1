import {  Descriptions } from 'antd';
import { useEffect, useState } from 'react';
import { getInforCustomer } from '../../../services/lead';

function DetailCustomer(data) {
  const [dataCustomer, setDataCustomer] = useState({})
  const handleGetInfoCustom = async (data) =>{
    getInforCustomer().then((res)=>{
      if(res.status === 200) {
        setDataCustomer(res?.data)
      }
      // setData(res?.data)
    })
  }
  useEffect(() =>{
    handleGetInfoCustom()
  }, [])
  return(
    <>
        <Descriptions layout="vertical"  >     
          {/* <Descriptions.Item label="Id">{dataCustomer?.data?.customerId}</Descriptions.Item>
          <Descriptions.Item label="Name"> {dataCustomer?.data?.customerName} </Descriptions.Item>
          <Descriptions.Item label="Ngày tạo"> {dataCustomer?.data?.createdDate} </Descriptions.Item>
          <Descriptions.Item label="Ngày sinh"> {dataCustomer?.data?.phone} </Descriptions.Item>
          <Descriptions.Item label="E-mail"> {dataCustomer?.data?.email} </Descriptions.Item>
          <Descriptions.Item label="Ghi Chú"> {dataCustomer?.data?.note} </Descriptions.Item>
          <Descriptions.Item label="Trạng thái"> {dataCustomer?.data?.status?.statusName} </Descriptions.Item>
          <Descriptions.Item label="Tên nhóm khách hàng"> {dataCustomer?.data?.group?.groupName} </Descriptions.Item>
          <Descriptions.Item label="Người quản lý"> {dataCustomer?.data?.group?.user?.userName} </Descriptions.Item> */}

          <Descriptions.Item label="Id" span={2}>1</Descriptions.Item>
          <Descriptions.Item label="Name"> Vũ Trần Yến Nhi </Descriptions.Item>
          <Descriptions.Item label="Ngày tạo" span={2}> 10/3/2023 </Descriptions.Item>
          <Descriptions.Item label="Ngày sinh"> 06/12/2002</Descriptions.Item>
          <Descriptions.Item label="E-mail" span={2}> nhi123@gmail.com  </Descriptions.Item>
          <Descriptions.Item label="Ghi Chú" > Đang tư vấn </Descriptions.Item>
          <Descriptions.Item label="Trạng thái" span={3}> ádds</Descriptions.Item>
          <Descriptions.Item label="Tên nhóm khách hàng" span={4}> hfdsjfdhj </Descriptions.Item>
          <Descriptions.Item label="Người quản lý" span={3}> jdfhjdfh</Descriptions.Item>

        </Descriptions>
    </>
  );
} 
export default DetailCustomer;