import React, { useState, useRef } from 'react';

const WorldRelay = () => {
    const [word, setWord] = useState('탱탱');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (word[word.length - 1] === value[0]) {
            setResult('정답');
            setWord(value);
            setValue('');
        } else {
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    };

    const handleChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={handleSubmitForm}>
                <input ref={inputRef} value={value} onChange={handleChangeInput} />
                <button>클릭!</button>
            </form>
            <div>{result}</div>
        </>
    );
};

export default WorldRelay;
