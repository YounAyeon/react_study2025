import React, { useState } from 'react'

/*
    실습 ) 숫자 맞추기
    1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기(1~3)
        - parseInt(Math.random() * 3) +1
    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
        - 정답인 경우 -> "정답입니다~!"
        - 틀린 경우 -> "땡~!"
        * 누른 버튼의 값 가져오는 방법 -> event 객체.target
*/

const BattleNumber = () => {
    // 내가 선택한 값
    const [select, setSelect] = useState(0);
    // 랜덤하게 나오는 값
    const [random, setRandom] = useState(0);
    // 결과 알려줌
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        const user = e.target.textContent;
        const rd = parseInt(Math.random() * 3)+1;

        setSelect(user);
        setRandom(rd);

        if(parseInt(user)=== rd){
            setResult("정답입니다");
        } else {
            setResult("땡");
        }
    }

  return (
    <div>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <p>내가 입력한 숫자 : <span>{select}</span></p>
        <p>랜덤한 숫자: <span>{random}</span></p>
        <p>{result}</p>
    </div>
  )
}


export default BattleNumber