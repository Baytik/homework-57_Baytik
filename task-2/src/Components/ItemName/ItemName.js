import React from 'react';

const ItemName = props => {
    return (
        <div>
            <input className="input-1" placeholder="Item name"/>
            <input className="input-2" placeholder="Cost"/>
            <span>KGS</span>
            <button className="btn-1">Add</button>
        </div>
    );
};

export default ItemName;