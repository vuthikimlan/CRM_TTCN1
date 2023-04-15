import React from 'react';
import './style.css'


function CoutUser({cout}) {
    return (
        <div className='cout_user'>
            <div className='icon'>
                {cout.icon}
            </div>
            <div className='cout_items' >
                <p className='title_user '>{cout.title}</p>
                <p className='amount_user'> {cout.amount} </p>
                <p style={
                    { margin: '5 0 0 ', 
                      fontWeight: 'bold'
                      }}>
                    {/* {cout.avatar ? cout.avatar : cout.date} */}
                    {/* {cout.date} */}
                </p>
            </div>
        </div>
    );
}

export default CoutUser;