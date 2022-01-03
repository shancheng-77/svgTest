import logo from './logo.svg';
import Test from "./svgComponent/test";
import {useState} from "react";
import './App.css';
import RectComponent from "./svgComponent/rectComponent";
import { Popconfirm, message } from 'antd';

function App() {
    let [x,setX] = useState(0);
    let [y,setY] = useState(0)
    let [x1,setX1] = useState(575);
    let [y1,setY1] = useState(100)
    let [height,setHeight] = useState(10);
    let [bol,setBol] = useState(false)
    function change() {
        setHeight(height<100?height+10:height)
    }
    function info(){
        setX(x1)
        setY(y1)
        setBol(!bol)
    }
  return (
    <div className="App" style={{display:'flex'}}>
        <svg width={1000} height={500} style={{border:'1px solid black'}}>
            <text x={x1-10} y={y1-20} fill="red" stroke='#70d5dd' style={{display:bol?'block':'none'}}>百分比：{height/100}</text>
            <RectComponent width={50} height={100} x={x1} y={y1} color='#90dee7' onMouseEnter={()=>info(x1,y1)} onMouseLeave={()=> setBol(!bol)}/>
            <RectComponent width={50} height={height}  x={x1} y={y1} color='#965d5d' onMouseEnter={()=>info(x1,y1)} onMouseLeave={()=> setBol(!bol)}/>
            <line x1="100" y1="250" x2="800" y2="250" style={{stroke:'rgb(0,0,0)',strokeWidth:5}} />
            <line x1="600" y1="200" x2="600" y2="250" style={{stroke:'rgb(0,0,0)',strokeWidth:3}} />
        </svg>
        <div>
            <p>x:{x}</p>
            <p>y:{y}</p>
            <p>百分比：{height/100}</p>
            <button onClick={change} >填充</button>
        </div>
    </div>
  );
}

export default App;
