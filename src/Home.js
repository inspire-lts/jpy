import React, { Component } from "react";

import "./style.css"
import LTS from './imgs/lts.jpg'
import JPY from './imgs/jpy.jpg'
import dayjs from "dayjs"


export default class App extends Component {
  
  componentDidMount() {
    let heartList = '';
    const n = 500;
    
    // 生成爱心列表
    for (let i = 0; i <= n; i++) {
        heartList += `
    <svg id="heart_${i}" class="item" t="1587910011145" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1253" width="32" height="32" fill="${this.getRandomColor()}"><path d="M677.51936 192.03072c113.1008 0 204.8 91.6992 204.8 204.77952 0 186.91072-370.3296 435.15904-370.3296 435.15904S141.68064 592.67072 141.68064 396.81024c0-140.78976 91.6992-204.77952 204.77952-204.77952 68.11648 0 128.28672 33.40288 165.5296 84.55168C549.24288 225.4336 609.41312 192.03072 677.51936 192.03072z" p-id="1254"></path></svg>
`
    }
    // 随机放大倍数
    const getRandomNum = (scale) => Math.floor(Math.random() * scale + 1);
    const boxWidth = window.innerWidth;
    const boxHeight = window.innerHeight;
    setTimeout(function () {
        for (let i = 0; i <= n; i++) {
            const item = `heart_${i}`;
            const width = getRandomNum(boxWidth);
            const height = getRandomNum(boxHeight);
            const cWidth = getRandomNum(1000) - width;
            const cHeight = getRandomNum(1000) - height;
            document.getElementById(item).animate([
                { transform: `scale(${getRandomNum(2)})`, left: `0px`, top: `0px` },
                { transform: `scale(${getRandomNum(2)})`, left: `${boxWidth / 2}px`, top: `${boxHeight / 2}px` },
                { transform: `scale(${getRandomNum(2)})`, left: `${cWidth * 2}px`, top: `${cHeight * 2}px` },
            ], {
                // timing options
                duration: 9000,
                iterations: Infinity,
                easing: 'ease-in-out'
            });
        }
    }, 100)
    document.getElementById('heart').innerHTML = heartList;
  }

 getRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

  nextImages() {
    this.props.history.push("images")
  }
  render() {
    return (
      <div>
        <div id="heart"></div>
        
        <div className="img-container">
          <img className="JPY" src={JPY} alt="小贾"/>
          <h2>{"FROM " + dayjs("2019-1-3").format("YYYY-MM-DD")}</h2>
          <img className="LTS" src={LTS} alt="阿汤"/>
        </div>
        
        <h2 className="first" onClick={() => this.nextImages()}>你好哇， 小贾!</h2>
        
      </div>
    );
  }

  

}