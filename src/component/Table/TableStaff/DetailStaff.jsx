import {  Descriptions } from 'antd';
import { useEffect, useState } from 'react';
import { getInforCustomer } from '../../../services/lead';

function DetailStaff(data) {
  const [dataStaff, setDataStaff] = useState({})
  
  return(
    <>
        <Descriptions layout="vertical"  >     
          {/* <Descriptions.Item label="Id">{dataStaff?.data?.userId}</Descriptions.Item>
          <Descriptions.Item label="Name"> {dataStaff?.data?.userName} </Descriptions.Item>
          <Descriptions.Item label="Ngày sin"> {dataStaff?.data?.date} </Descriptions.Item>
          <Descriptions.Item label="E-mail"> {dataStaff?.data?.email} </Descriptions.Item>
          <Descriptions.Item label="Địa chỉ"> {dataStaff?.data?.address} </Descriptions.Item>*/}

          <Descriptions.Item label="Id" span={2}>1</Descriptions.Item>
          <Descriptions.Item label="Name"> Vũ Thị Khánh Linh </Descriptions.Item>
          <Descriptions.Item label="Ngày sinh" span={2}> 10/3/1992 </Descriptions.Item>
          <Descriptions.Item label="E-mail" span={2}> linh123@gmail.com  </Descriptions.Item>
          <Descriptions.Item label="Địa chỉ" span={3}> jdfhjdfh</Descriptions.Item>

        </Descriptions>
    </>
  );
} 
export default DetailStaff;