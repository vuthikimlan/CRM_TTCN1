import { ModalForm, ProFormDatePicker } from '@ant-design/pro-components';
import {ProForm, 
        ProFormText, 
      } from '@ant-design/pro-components';
import { creatCustom, updateCustomer } from '../../../services/lead';
import { message } from 'antd';



function AddCustomer({onSuccess, openModal, data, onOpenChange}) {
  //Ham tao khach hang
  const handleCreatCustomer = (values) =>{
    creatCustom(values).then((res) =>{
      if(res.status === 200) {
        message.success('Tạo khách hàng thành công')
        onSuccess();
      }
    })
  }

  const handleUpdateCustomer = (values) =>{
    updateCustomer(data.id, values).then((res) =>{
      if(res.status === 200) {
        message.success('Cập nhật thành công')
      }
    })
  }
  return (
    <>
      <ModalForm
        // title='Thêm khách hàng mới '
        title={data?.id ? 'Chỉnh sửa thông tin khách hàng' : 'Thêm khách hàng mới'}
        initialValues={data?.data}
        modalProps={{
          destroyOnClose: true,
        }}
        open={openModal}
        onFinish={async (values) => {
          if(data?.id) {
            handleUpdateCustomer(values)
          } else{
            handleCreatCustomer(values)
          }
        }}
        onOpenChange={onOpenChange}
      >
        <ProForm.Group>
        <ProFormText 
            width="md" 
            name="customerId"
            label="Mã khách hàng" 
            placeholder="Mã khách hàng "
          /> 
        <ProFormText 
            width="md" 
            name="customerName" 
            label="Tên khách hàng" 
            placeholder="Tên khách hàng" 
          />  
          <ProFormDatePicker 
            width="md" 
            name="createdDate" 
            label="Ngày Tạo" 
            placeholder="Vui lòng chọn"
          />

          <ProFormText 
            width="md" 
            name="phone" 
            label="Số điện thoại" 
            placeholder="phone" 
          />
          
          <ProFormText 
            width="md" 
            name="email" 
            label="E-mail" 
            placeholder="E-mail" 
          />
          <ProFormText 
            width="md" 
            name="note" 
            label="Ghi chú" 
            placeholder="ghi chú" 
          />
          <ProFormText 
            width="md" 
            name="address" 
            label="Địa chỉ" 
            placeholder="Địa chỉ" 
          />
          <ProFormText 
            width="md" 
            name="statusName"
            label="Trạng thái" 
            placeholder="Trạng thái" 
          />
          <ProFormText 
            width="md" 
            name="group" 
            label="Nhóm khách hàng" 
            placeholder="nhóm" 
          />
          

          
        </ProForm.Group>
       
      </ModalForm>
    </>
  );

}
export default AddCustomer;