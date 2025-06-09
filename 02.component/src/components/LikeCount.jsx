import React, { useState } from 'react'
import img1 from '../assets/img/pr.jpg';

const LikeCount = () => {
    const [num, setNum] = useState(0);
    const [emoji, setEmoji] = useState("🤍");

    const handlerClick = () => {
        if(emoji === "🤍") {
            setEmoji("❤");
            setNum(1);
        }else {
            setEmoji("🤍");
            setNum(0);
        }
    }
  return (
    <div>
        <img
        style={{width:180, height:150}} 
        src={img1} 
        alt={"페럿이미지"}/>
        <p><span onClick={handlerClick}>{emoji}</span>좋아요 {num}개</p>
    </div>
  )
}

export default LikeCount