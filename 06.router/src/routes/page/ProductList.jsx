import React from 'react'
import { Link, useNavigate } from 'react-router'

const ProductList = () => {

    // react-router에 있는 함수로 
    // 페이지 이동을 하게해주는 함수이다.
    // useNavigate()
    // - 페이지를 이동할 떄 사용하는 컴포넌트
    // - Link컴포넌트와 다른 점은 조건에 따라 페이지를 이동해야 할 때 활용!
    
    const navigate = useNavigate();
    // 클릭했을때 사용될 원클릭함수를 만들어서 navigate를
    // 사용해서 경로를 걸어주면 해당 페이지로 이동이 가능하다
    const goToHome = () => {
        // 로직이 필요한 경우 navigate를 사용한다.
        navigate("/")
    }
    const goToProduct = (e) => {
        if(e.target.innerText === "ProductDetail 이동") {
            navigate("/prdDetail/1")
        }else{navigate("/prdDetail2?pro_no=15&cate=pants")

        }
        
    }

    return (
        <div>
            <h1>ProductList</h1>
            <button onClick={goToHome}>Home 이동</button>
            <button onClick={goToProduct}>ProductDetail 이동</button>
            <button onClick={goToProduct}>ProductDetail2 이동</button>
            
        </div>
    )
}

export default ProductList