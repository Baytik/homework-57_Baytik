import React, {Fragment} from 'react';

const Content = props => {
    return (
        <Fragment>
        <div className="Content">
            <p className="text">Bottle of water</p>
            <span className="price">25 KGS</span>
            <button className="btn-2" >X</button>
        </div>
            <h1>Total spent:</h1>
        </Fragment>
    );
};

export default Content;