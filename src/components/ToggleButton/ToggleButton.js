import React from 'react';

export default props => {

    let className = props.selected
        ? `switch-${props.size ? props.size : 'medium'} rc-switch rc-switch-checked`
        : `switch-${props.size ? props.size : 'medium'} rc-switch`;

    return (
        <div className="d-flex align-items-center">
            <button type="button" role="switch" aria-checked="false" className={className}>
                <span className="rc-switch-inner"></span>
            </button>
        </div>
    );
};