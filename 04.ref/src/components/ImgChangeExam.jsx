import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import cat from '../assets/img/cat.jpg'
import dog from '../assets/img/dog.jpg'

const ImgChangeExam = () => {
  const inputRef = useRef("");
    const [imgUrl , setUrl] = useState("");
    const handleChange = (e) => {
        e.preventDefault();

        const query = inputRef.current.value;

        if(query === "강아지") {
            setUrl(dog);
        }else if (query === "고양이") {
            setUrl(cat);
        }
    }

  return (
    <div>
        <p>희망하는 사진이 있으신가요?</p>
        
            <p><input type = "text" ref={inputRef}></input></p>
            <button onClick={handleChange}>변경</button>
            <img src={imgUrl}/>
    </div>
  )
}

export default ImgChangeExam