import React, { useState } from 'react';
import Try from 'components/numberBaseball/Try';

const getNumbers = () => {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

const NumberBaseballContainer = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const handleChangeInput = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런');
            setTries((prevTries) => {
                return [...prevTries, { try: value, result: '홈런!' }];
            });
            alert('게임을 다시 시작합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;

            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 정답은 ${answer.join(', ')}`);
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => [...prevTries, { try: value, result: `${strike} 스트라이크 ${ball} 볼` }]);
                setValue('');
            }
        }
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={handleSubmit}>
                <input maxLength={4} value={value} onChange={handleChangeInput} />
            </form>
            <div>횟수: {tries.length}</div>
            <ul>
                {tries.map((o, index) => (
                    <Try key={`${index + 1}차 시도 : `} tryInfo={o} />
                ))}
            </ul>
        </>
    );
};

export default NumberBaseballContainer;
