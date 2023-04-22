import request from './request'

// Khách hàng 

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

// Lọc thông tin khách hàng
export const filterCustomer = () =>{
    return request.post('/customer/filter')
}

// Người dùng
// API tạo người dùng
export const createUser = (values) => {
    return request.post(`/user`, {
        data: values
    })
}
// API lấy tất cả các người dùng
export const getListUser = () =>{
    return request.get('/user/all')
}

// API lấy thông tin chi tiết của từng người dùng
export const getInforUser = (id)=>{
    return request.get(`/user/${id}`
    )
}

// Update thông tin người dùng
export const updateUser= (id, values) =>{
    return request.put(`/user/${id}`,
        {
            data: values
        }
    )
}

// Xóa từng người dùng
export const delUser = (id)=>{
    return request.delete(`/user/${id}`)
}

// Xóa tất cả các người dùng 
export const delAllUser = () =>{
    return request.delete('/user/delete/all')
}

// Lọc thông tin người dùng
export const filterUser = () =>{
    return request.post('/user/filter')
}
