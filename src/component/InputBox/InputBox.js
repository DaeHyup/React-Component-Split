import React from 'react';
import './InputBox.css';

const InputBox = () => {
    return (
        <div className="input_boxes">
            <div className="input_box">
                <div className="input_name">이름</div>
                <input
                    type="input"
                    placeholder="이름"
                    name="name"
                    className="input_box_in"
                />
            </div>
            <div className="input_box">
                <div className="input_name">비밀번호</div>
                <input 
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                    className="input_box_in"
                />
            </div>
            <button className="input_button">제출</button>
        </div>
    );
};

export default InputBox;