import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MapArrayExam from './components/MapArrayExam'
import MapObjectExam from './components/MapObjectExam'
import MenuBoard from './components/MenuBoard'
import FliterExam from './components/FilterExam';

const App = () => {


  return (
    <>
      {/* map() 함수 실습1  만든 컴포넌트 호출 */}
      {/* <MapArrayExam></MapArrayExam> */}

      {/*  map() 함수 실습1 */}
      {/* <MapArrayExam/> */}
      {/*  map() 함수 실습2 */}
      {/* <MapObjectExam/> */}
      {/* <FliterExam/> */}
      
      {/* 실습) 음료 메뉴 출력하기 */}
      <MenuBoard/>
    </>


  )
}

export default App