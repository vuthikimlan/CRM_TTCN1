import { ModalForm, ProFormDatePicker } from '@ant-design/pro-components';
import {ProForm, 
        ProFormText, 
      } from '@ant-design/pro-components';



function AddStaff({onSuccess, openModal, data, onOpenChange}) {
  
  return (
    <>
      <ModalForm
        title='Thêm nhân viên mới '
        open={openModal}
        onFinish={async (values) => {}}
        onOpenChange={onOpenChange}
      >
        <ProForm.Group>
          <ProFormText 
            width="md" 
            name="userName" 
            label="Tên nhân viên" 
            placeholder="name" 
          />
          <ProFormDatePicker 
            width="md" 
            name="date" 
            label="Ngày sinh" 
            placeholder="Ngày sinh" 
          />
          <ProFormText 
            width="md" 
            name="email" 
            label="E-mail" 
            placeholder="E-mail" 
          />
          <ProFormText 
            width="md" 
            name="address" 
            label="Địa chỉ" 
            placeholder="Địa chỉ" 
          />
          <ProFormText 
            width="md" 
            name="password" 
            label="Mật khẩu" 
            placeholder="Mật khẩu" 
          />
          <ProFormText 
            width="md" 
            name="roleId" 
            label="Mã vai trò" 
          />
        </ProForm.Group>
       
      </ModalForm>
    </>
  );

}
export default AddStaff;
