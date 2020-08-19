import React, { useState } from 'react';

const Head = props => {
    const { name, sortingEnabled, keyName, sortData, sortTable } = props;

    const [sortOrder, setSortOrder] = useState('asc');

    function sort(sortBy) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        sortTable(sortOrder === 'asc' ? 'desc' : 'asc', sortBy);
    }
    return (
        <th scope="col">
            <span
                style={sortingEnabled ? { cursor: 'pointer' } : null}
                onClick={e => sort(keyName)}>
                {name}
                {sortingEnabled
                    ? <i
                        className={`fas fa-arrow-${(sortData.sortBy && sortData.sortBy === keyName) ? (sortOrder === 'asc' ? 'up' : 'down') : 'up'} ml-1`}
                        style={sortData.sortBy === keyName ? { fontSize: '10px', color: '#010101' } : { fontSize: '10px' }}></i>
                    : null}
            </span>
        </th>
    );
};

export default props => {
    const { tableHeadings, sort, sortTable } = props;

    return (
        <thead className="thead-light">
            <tr>
                {tableHeadings.map(({ name, key, sortingEnabled }, index) => {
                    return <Head
                        key={index}
                        name={name}
                        sortingEnabled={sortingEnabled}
                        keyName={key}
                        sortTable={sortTable}
                        sortData={sort}
                    />
                })}
            </tr>
        </thead>
    );
};