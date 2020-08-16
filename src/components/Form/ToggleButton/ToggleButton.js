import React from 'react';

export default props => {

    return (
        <label className="custom-toggle">
            <input type="checkbox" />
            <span className="custom-toggle-slider rounded-circle" />
        </label>
    );
};