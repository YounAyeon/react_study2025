import React from 'react'
import { useRef } from 'react'
import cat from '../assets/img/cat.jpg'
import dog from '../assets/img/dog.jpg'

const ImgChangeExam2 = () => {

    let keywordRef = useRef();
    let imgRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
    

    if(keywordRef.current.value === "강아지"){
        imgRef.current.src = dog;
    }else if(keywordRef.current.value === "고양이") {
        imgRef.current.src = cat;
    }

    


    // 입력창의 내용을 초기화 하고 해당 요소를 선택하능 기능
    // keywordRef.current.value='';
    // keywordRef.current.focus();
    
    }
  return (

    <div>
        <form>
        <p>희망하는 사진이 있으신가요?</p>
        <input type="text" ref={keywordRef}></input>
        <button onClick={handleClick}>변경</button>
        </form>
        <img ref={imgRef}></img>
    </div>
  )
}

export default ImgChangeExam2