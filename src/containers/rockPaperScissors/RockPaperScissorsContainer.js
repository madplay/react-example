import React, { useState, useEffect, useRef } from 'react';

const RSP_POSITION = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1
};

const computerChoice = (imgPos) => {
    return Object.entries(RSP_POSITION).find(function (v) {
        return v[1] === imgPos;
    })[0];
};

const RockPaperScissorsContainer = () => {
    const [result, setResult] = useState('');
    const [imgPos, setImgPos] = useState(RSP_POSITION.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => {
        // componentDidMount, componentDidUpdate 역할
        // 1대1 대응은 아니다.
        interval.current = setInterval(changeHand, 100);
        return () => {
            // componentWillUnmount 역할
            // 다시 렌더링되지 않으므로 상태를 지정하면 안 된다.
            // 타이머, 요청 취소 등만 수행한다.
            clearInterval(interval.current);
        };
    }, [imgPos]);

    const changeHand = () => {
        if (imgPos === RSP_POSITION.바위) {
            setImgPos(RSP_POSITION.가위);
        } else if (imgPos === RSP_POSITION.가위) {
            setImgPos(RSP_POSITION.보);
        } else if (imgPos === RSP_POSITION.보) {
            setImgPos(RSP_POSITION.바위);
        }
    };

    const handleClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgPos)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('비겼습니다!');
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('졌습니다!');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 1000);
    };

    return (
        <>
            <div
                id="computer"
                style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgPos} 0` }}
            />
            <div>
                <button id="rock" className="btn" onClick={handleClickBtn('바위')}>
                    바위
                </button>
                <button id="scissor" className="btn" onClick={handleClickBtn('가위')}>
                    가위
                </button>
                <button id="paper" className="btn" onClick={handleClickBtn('보')}>
                    보
                </button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
};

export default RockPaperScissorsContainer;
