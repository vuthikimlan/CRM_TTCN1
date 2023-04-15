import request from './request'

// API tạo khách hàng
export const creatCustom = (values) => {
    return request.post(`/customer`, {
        data: values
    })
}
// API lấy tất cả các khách hàng
export const getListCustomer = () =>{
    return request.get('/customer/all')
}

// API lấy thông tin chi tiết của từng khách hàng
export const getInforCustomer = (id)=>{
    return request.get(`/customer/${id}`
    )
}

// Update thông tin khách hàng
export const updateCustomer = (id, values) =>{
    return request.put(`/customer/${id}`,
        {
            data: values
        }
    )
}

// Xóa từng khách hàng
export const delCustomer = (id)=>{
    return request.delete(`/customer/${id}`)
}

// Xóa tất cả các khách hàng 
export const delAllCustomer = () =>{
    return request.delete('/customer/delete/all')
}