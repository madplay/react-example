import React, { useRef, useState } from 'react';
import { parseInt as _parseInt } from 'lodash';

const Multiplication = () => {
    // 초기값을 랜덤으로 세팅
    const [firstValue, setFirstValue] = useState(Math.ceil(Math.random() * 9));
    const [secondValue, setSecondValue] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef(null); // ref

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (_parseInt(value) === firstValue * secondValue) {
            setResult('정답! ' + value);
            setFirstValue(Math.ceil(Math.random() * 9));
            setSecondValue(Math.ceil(Math.random() * 9));
            setValue('');
            inputEl.current.focus();
        } else {
            setResult('땡!');
            setValue('');
            inputEl.current.focus();
        }
    };
    return (
        <>
            <div>
                {firstValue} 곱하기 {secondValue}는?
            </div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputEl} type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
};

export default Multiplication;
