import React from 'react';
import CoutUser from '.';

function HeaderList({coutList}) {
    return (
        <div style={
            {
                display: 'flex', 
                justifyContent:'space-around',
                width: '86%',
                }} >
            {coutList.map(cout =>
                <CoutUser key={cout.id} cout ={cout}  />
            )}
        </div>
    );
}

export default HeaderList;