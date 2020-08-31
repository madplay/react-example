import React, { useRef, useState } from 'react';

const ResponseCheckContainer = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef(0);
    const endTime = useRef(0);

    const handleClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요');
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
        } else if (state === 'ready') {
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('너무 빨랐다. 초록색이 되면 클릭하세요.');
        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
        }
    };
    const handleReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        return result.length === 0 ? null : (
            <>
                <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
                <button onClick={handleReset}>리셋</button>
            </>
        );
    };

    return (
        <>
            <div id="screen" className={state} onClick={handleClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </>
    );
};

export default ResponseCheckContainer;
