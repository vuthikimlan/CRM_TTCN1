import { createBrowserRouter } from "react-router-dom";
import Login from "./component/Login/Login";
import ForgotPassword from "./component/Login/ForgotPassword";
import TableCustomer from "./component/Table/TableCustomer/TableCustomer";
import AdminPage from "./component/Admin/AdminPage";
import TableContent from "./component/Table/TableStaff/TableStaff";
import DetailCustomer from "./component/Modal/Detail/DetailCustomer";
import ListRole from "./component/Table/Bang_Phan_Quyen/ListRole"
import ListUser from "./component/Table/Bang_Phan_Quyen/ListUser"
// import Loginpage from "./component/Login/loginpage";
export const router = createBrowserRouter(
[
    {
        
        path:'/',
        element:<Login/>,
        
    },

    {
        path:'/forgotpassword',
        element:<ForgotPassword/>

    },
    {
        path:'/adminpage',
        element:<AdminPage/>,
        children:[
            {
                path:'customer',
                element:<TableCustomer/>,
                children:[
                    {
                        path: 'detailcustomer',
                        element: <DetailCustomer/>
                    }
                ]
            },
            {
                path:'staff',
                element:<TableContent/>,
                // children:[
                //     {
                //         path:'detailstaff',
                //         element:<DetailStaff/>
                //     }
                // ]
            },
            {
                path:'listrole',
                element:<ListRole/>,
                
            },
            {
                path:'listuser',
                element:<ListUser/>
            }

        
        ]
    },
    

]
)