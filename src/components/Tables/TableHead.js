import React from 'react';

export default props => {
    return (
        <thead className="thead-light">
            <tr>
                {props.tableHeadings.map((heading, key) => {
                    return <th scope="col" key={key}>{heading}</th>
                })}
            </tr>
        </thead>
    );
};