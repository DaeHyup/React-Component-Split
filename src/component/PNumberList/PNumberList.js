import React from 'react';
import './PNumberList.css';

const PNumberList = () => {
    return (
        <div className="Phone_List">
            <div className="Phone_List_Left">
                 <div className="Phone_name">홍길동</div>
                 <div className="Phone_number">010-1234-5678</div>
            </div>
            <div className="Phone_List_Right">
                <button>삭제</button>
            </div>
        </div>
    );
};

export default PNumberList;