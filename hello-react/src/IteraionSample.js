import React from 'react';

const IterationSample = ()  => {
    const [names, setNames] = useState([
        {id: 1, text: '봄'},
        {id: 2, text: '여름'},
        {id: 3, text: '가을'},
        {id: 4, text: '겨울'}
    ])
    const [inputText, setInputText] = useState('');
    const [naxtId, setNextId] = useState(5);
    
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: setNextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id != id);
        setNames(nextNames);
    };
    const namesList = names.map(name => (
    <li key = {name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
        </li>
        ));
    return (
    <>
    <input value={inputText} onChange={onChange} />
    <button>추가</button>
    <ul>{namesList}</ul>
    </>
    );
}

export default IterationSample;