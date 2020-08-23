import React, { useState } from 'react';

export default props => {

    const [checked, setChecked] = useState(props.isActive);
    return (
        <label className="custom-toggle">
            <input type="checkbox"
                checked={checked}
                onChange={e => {
                    setChecked(e.target.checked);
                    props.changeStatus(e.target.checked);
                }} />
            <span className="custom-toggle-slider rounded-circle" />
        </label>
    );
};