import React from 'react'
import { useNavigate } from 'react-router'

const Login = ({setAuthenticate}) => {
    // 구조분해 할당 -> 키값을 바로 사용 -> 중괄호 사용하기
    const navigate = useNavigate();
    // 페이지 이동할 떄 쓰는 함수

    const goToHome = () => {
        setAuthenticate(true);
        navigate("/");
    }

  return (
    <div>
        <h1>Login</h1>
        <button onClick={goToHome}>로그인</button>
    </div>
  )
}

export default Login