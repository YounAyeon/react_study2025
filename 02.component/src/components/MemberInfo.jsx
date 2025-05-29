import React from 'react'

const MemberInfo = ({teamNm,name}) => {

let styled = {
    // width: 100,
    // height: 200,
    // fontWeight : "bold",
    // backgroundColor : "#edffff",
    // border: "2px solid skyblue",
    // float : "left",
    // margin : "10px",
    // borderRadius : "10px",
    // display : "flex",
    // flexDirection : "column",
    // justifyContent : "center",
    // alignContent : "center",
    // textAlign : "center",
    
}


  return (
    <div className='team-info' style={styled}>
        <p>{teamNm}</p>
        <p>{name}</p>
    </div>

  )
}

export default MemberInfo