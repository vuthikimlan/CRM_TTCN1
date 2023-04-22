import React from "react";
import {Input, Form, Button, Col, DatePicker } from "antd";

function FilterStaff() {
   
    return(
        <>
            <h1 style={{marginTop: 0}}>Lọc</h1>
            <h3>Lọc theo</h3>
            <div style={{display:'flex'}}>
                <p style={{marginTop:2}}>Mã Khách hàng</p>
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
            {/* <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
      <RangePicker />
    </Form.Item> */}
                <DatePicker/>
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

export default FilterStaff;