import React from 'react';

const IterationSample = ()  => {
    const names = ['봄', '여름', '가을', '겨울'];
    const nameList = names.map(name => <li>{name}</li>);
    return <ul>{nameList}</ul>
}

export default IterationSample;
