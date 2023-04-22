import {  Descriptions } from 'antd';
import { useEffect, useState } from 'react';

function DetailUser(data) {
  const [dataUser, setDataUser] = useState({})
  
  return(
    <>
        <Descriptions layout="vertical"  >     
          {/* 
          <Descriptions.Item label="Tên người dùng"> {dataUser?.data?.userName} </Descriptions.Item>
          <Descriptions.Item label="Ngày sinh"> {dataUser?.data?.date} </Descriptions.Item>
          <Descriptions.Item label="E-mail"> {dataUser?.data?.email} </Descriptions.Item>
          <Descriptions.Item label="Địa chỉ"> {dataUser?.data?.address} </Descriptions.Item>
          <Descriptions.Item label="Vai trò"> {dataUser?.data?.role?.roleName} </Descriptions.Item>
          */}

          <Descriptions.Item label="Tên người dùng"> Vũ Thị Khánh Linh </Descriptions.Item>
          <Descriptions.Item label="Ngày sinh" span={2}> 10/3/1992 </Descriptions.Item>
          <Descriptions.Item label="E-mail" span={2}> linh123@gmail.com  </Descriptions.Item>
          <Descriptions.Item label="Địa chỉ" span={3}> Kinh Môn - Hải Dương</Descriptions.Item>
          <Descriptions.Item label="Vai trò" span={3}>STAFF</Descriptions.Item>

        </Descriptions>
    </>
  );
} 
export default DetailUser;