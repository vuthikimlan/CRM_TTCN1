import React from "react";
import {Input, Checkbox, Button, Col } from "antd";

function FilterCustomer() {
   
    return(
        <>
            <h1 style={{marginTop: 0}}>Lọc</h1>
            <h3>Lọc theo</h3>
            <div style={{display:'flex'}}>
                <p style={{marginTop: 2}}>Mã Khách hàng</p>
                <Input
                    style={{
                        marginLeft: 20, 
                        width: '50%',
                        height: 25
                        
                    }}  
                    size="small"
                />
                
            </div>
            <div>
                <h3>Lọc theo trạng thái</h3>
                
                {/* <Checkbox.Group> */}
                    <Checkbox>Khách hàng tiềm năng</Checkbox>
                    <br/>
                    <br/>
                    <Checkbox >Khách chờ gọi lại sau</Checkbox>
                    <br/>
                    <br/>
                    <Checkbox >Khách không nghe máy</Checkbox>
                    <br/>
                    <br/>
                    <Checkbox >Khách không còn quan tâm</Checkbox>
                    <br/>
                    <br/>
                {/* </Checkbox.Group> */}
                    
                
            </div>
            <div>
                <Button>
                    Huỷ
                </Button>
                <Button>
                    Lọc
                </Button>
            </div>
            
        </>
    );
};

export default FilterCustomer;