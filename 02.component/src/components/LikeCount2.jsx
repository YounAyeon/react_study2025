import React,  { useState } from 'react'
import img from '../assets/img/pr.jpg';

const LikeCount2 = () => {
    const [num, setNum] = useState(0);
    const handleClick1 = () => {
        if(num > 0) {
            setNum(num-1);
        }
    }
    const handleClick2 = () => {
        setNum(num+1);
    }


  return (
    <div className='box'>
        <img 
        style={{width:300}}
        src={img}
        alt={"페럿이미지"}/>
        <p className='ptag'>좋아요<span>{num}</span></p>
        {/*  onClick 속성에 함수 실행문을 넣을 떄 {()=> 함수명} 형태로 정의해야 한다. */}
        <div>
            <button onClick={handleClick1}>🤍</button>
            <button onClick={handleClick2}>❤</button>
        </div>
    </div>
  )
}

export default LikeCount2