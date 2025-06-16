import React, { useEffect, useState } from 'react'

/*
    실습)참참참 게임
    1/ 사용자는 공격, 컴퓨터는 수비 역할입니다.
    2. '좌','정면','우' 중 하나를 클릭했을 때, 사용자의 컴퓨터의 선택을 비교합니다
        -같은 선택일 경우: 사용자의 승리
        -다른 선택일 경우: 컴퓨터의 승리
    3. 승리에 대한 결과를 화면에 출력합니다
    좌,우,정면은 배열에 담아서 활용할 것
     state는 3개 나,컴퓨터,결과값
 */

const ChamChamCham = () => {

     const [select , setSelect] = useState();
     const[comSelect, setComSelect] = useState();
     const [text, setText] = useState();
     const direction = ["좌","정면","우"];

    //  useEffect(()=> {

    //      const play = (direction) =>{
    //      const computerSelect = direction[ math.floor(Math.random()*direction.length )];
    //      setSelect(computerSelect);
             
    //         };
    //     },[]);

     const handleClick = ((e)=>{
       console.log(e.target.value);
        const rd = parseInt(Math.random()*3);

       setSelect(direction[e.target.value]);
       setComSelect(direction[rd]);
     });

    useEffect(()=>{
        if(select === comSelect){
            if(select != null){
                setText("게임 결과 : 승리")
            }
        }else{
            setText("게임 결과: 패배")

        }
    },[select,comSelect]);
      
  return (
    /*
        ""(공백)은 false로 인식하기 때문에 오른쪽의 태그를 출력하지 않음
        result state에 값이 초기화 되면 true로 인식하면서 결과값을 출력
     */
    <div>
        <h1>참참참 게임!~~~</h1>
        <p>나의 선택: {select}</p>
        <p>컴퓨터의 선택: {comSelect}</p>
        <p>{text}</p>
        <button onClick={handleClick} value={0}>좌</button>
        <button onClick={handleClick} value={1}>정면</button>
        <button onClick={handleClick} value={2}>우</button>
    </div>
  )
}

export default ChamChamCham