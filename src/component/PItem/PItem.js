import React from "react";
import PNumberList from '../PNumberList';
import './PItem.css';

const PItem = () => {
    return (
        <div className="P_Item">
            <PNumberList />
            <PNumberList />
            <PNumberList />
        </div>
    );
};

export default PItem;