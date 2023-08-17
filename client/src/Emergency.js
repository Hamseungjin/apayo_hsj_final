import React from "react";
import "./emergency.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Test_2() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.location.href = "http://www.119.go.kr/Center119/registEn.do"; // 유효한 외부 도메인으로 이동
  };

  const imageElement = (
    <a  onClick={handleButtonClick}>
      <img className="union" alt="Union" src="/img/union-1.png" />
    </a>
  );

  return (
    <div className="App">
      <div className="emergency">
        <div className="div">
          <div className="text-wrapper"><img src='/img/apayo.png'></img></div>
          <div className="overlap">
          <a href='#' onClick={handleButtonClick}> {/* 버튼 클릭 시 페이지 이동을 위해 onClick 이벤트 추가 */}
            <img className="image" alt="Image" src="/img/image-41.png" />
            </a>
            <div className="emergency-call">
              응급전화<br />Emergency Call
            </div>
          </div>
          <div className="overlap-group">
            <div className="group">
              <div className="overlap-group-2">
                <img className="vector" alt="Vector" src="/img/Group 190.png" />
                <div className="text-wrapper-2">119</div>
              </div>
            </div>
          </div>
          <div className="union-wrapper">
              <img className="img" alt="Union" src="/img/union.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test_2;