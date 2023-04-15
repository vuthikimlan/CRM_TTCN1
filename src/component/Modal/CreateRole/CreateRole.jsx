import { ModalForm, ProCard, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Button, Collapse, Switch  } from 'antd';
import {CheckCircleOutlined, CloseCircleOutlined} from  '@ant-design/icons';
import "./style.css"

function CreateRole({openModal, onOpenChange}) {
const { Panel } = Collapse;
const onChange = (key) => {
    console.log(key);
  }
    return(
        <>
          <ModalForm
            open={openModal}
            onFinish={()=>{}}
            onOpenChange={onOpenChange}
          >
             <ProCard>
                  <ProFormText
                    name=""
                    label="Tên vai trò"
                    width="md"
                    placeholder="Nhập tên vai trò"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên vai trò"
                      }
                    ]}
                  />
                  <ProFormTextArea 
                    name="remark" 
                    label="Mô tả" 
                    width="lg" 
                    placeholder="Mô tả về vai trò" 
                  />
            </ProCard>
            <p className='name'>Quyền hạn</p>
            <div>
              <div className='title'>
                <p>Các quyền hạn được phép cho vai trò này</p>
                <div>
                  <Button className='uncheck'>
                    <CloseCircleOutlined />
                    Bỏ chọn
                  </Button>
                  <Button>
                    <CheckCircleOutlined />
                    Chọn tất cả
                  </Button>
                </div>

              </div>
              <Collapse defaultActiveKey={['1']} onChange={onChange}>
              <Panel header="Admin" >
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                  <div>
                    <div className='choose'>
                      <Switch/> 
                      <p>Xem danh sách khách hàng của các nhóm</p>
                    </div>
                    <div className='choose'>
                      <Switch/> 
                      <p>Thêm khách hàng</p>
                    </div>
                    <div className='choose'>
                      <Switch/> 
                      <p>Sửa thông tin khách hàng</p>
                    </div>
                    <div className='choose'>
                      <Switch/> 
                      <p>Xóa khách hàng</p>
                    </div>
                  </div>
                  <div >
                    <div className='choose'>
                      <Switch/> <p>Thêm nhân viên</p>
                    </div>
                    <div className='choose'>
                      <Switch/> <p>Sửa thông tin nhân viên</p>
                    </div>
                    <div className='choose'>
                      <Switch/> <p>Xóa nhân viên</p>
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="Nhân Viên" >
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                  <div >
                      <div className='choose'>
                        <Switch/> <p>Xem danh sách khách hàng của các nhóm</p>
                      </div>
                      <div className='choose'>
                        <Switch/> <p>Thêm khách hàng</p>
                      </div>
                  </div>
                  <div>
                      <div className='choose'>
                        <Switch/> <p>Sửa thông tin khách hàng</p>
                      </div>
                      <div className='choose'>
                        <Switch/> <p>Xóa khách hàng</p>
                      </div>
                  </div>
                </div>
              </Panel>
                
              </Collapse>
            </div>
            
          </ModalForm>
        </>
    );
};
export default CreateRole;