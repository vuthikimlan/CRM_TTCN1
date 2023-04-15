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
            name=""
            label="Mã nhân viên"
            placeholder="id"
          />

          <ProFormText 
            width="md" 
            name="" 
            label="Tên nhân viên" 
            placeholder="name" 
          />
          <ProFormDatePicker 
            width="md" 
            name="" 
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
            name="" 
            label="Số điện thoại" 
            placeholder="phone" 
          />
          <ProFormText 
            width="md" 
            name="" 
            label="Mật khẩu" 
            placeholder="Mật khẩu" 
          />
        </ProForm.Group>
       
      </ModalForm>
    </>
  );

}
export default AddStaff;
