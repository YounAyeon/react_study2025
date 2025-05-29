import React from 'react'

const App2 = () => {

    let name = prompt("너의 이름은?");

    // 날짜, 시간 관력 정보를 가진 객체
    let today = new Date();
    
    console.log(today);
    console.log(today.toLocaleDateString()); // 현지 시간 기준 날짜(년/월/일) 반환
    console.log(today.getMonth()+1); // 0~11 값으로 반환 -> +1 더해주는 작업 필요
    let month = today.getMonth()+1;
    let season = "";

    
    switch(month) {
        case 12,1,2 :
            console.log("겨울");
            season="겨울";
            break;
        case 3,4,5 :
            console.log("봄");
            season="봄"
            break;
        case 6,7,8 :
            console.log("여름");
            season="여름"
            break;
        case 9,10,11 :
            console.log("가을");
            season="가을"
            break;
        
            
            // if(month >= 3 && month <= 5){
            //     season="봄";
            // }else if {
            //     season="여름";
            // }else if {
            //     season="가을";
            // }else {
            //     season="겨울";
            // }
            



    }
    
   // let name = prompt("이름을 말해주세요");

  return (

    <div>
        <h1>{today.toLocaleDateString()}</h1>
        <hr/>
        {name}님 지금 계절은 {season}입니다. 좋은 하루 되세요!
    </div>
   
  
  )
}

export default App2