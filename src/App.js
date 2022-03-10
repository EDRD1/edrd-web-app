import './App.css';
import {Canvas} from "@react-three/fiber";
import styled from 'styled-components';
import { Suspense,useState } from 'react';
import {CubeTransparent} from "./components/CubeTransparent";



function App() {
  const [animation, setAnimation] =useState("StandBy")
  return (
    <Wrapper className="App">
      <header className="App-header">
      <button  className="btnDirection" onMouseDown={()=>{setAnimation("Up")}} onMouseUp={()=>{setAnimation("StandBy")}} >
        🔺
        </button>
        <button  className="btnDirection" onMouseDown={()=>{setAnimation("Down")}} onMouseUp={()=>{setAnimation("StandBy")}}>
        🔻
        </button>
        <button  className="btnDirection" onMouseDown={()=>{setAnimation("Left")}} onMouseUp={()=>{setAnimation("StandBy")}}>
        ◄
        </button>
        <button  className="btnDirection" onMouseDown={()=>{setAnimation("Right")}} onMouseUp={()=>{setAnimation("StandBy")}}>
        ►
        </button>
      </header>
        <Canvas className="canvas">
          <Suspense fallback={null}>
            <directionalLight position={[10,2,1]} intensity={0.08} color={0x3b79ff}/>
            <directionalLight position={[-10,2,-1]} intensity={0.08} color={0x3b79ff}/>
            <CubeTransparent animation={animation} />
          </Suspense>
        </Canvas>   
    </Wrapper> 
  )
}

const Wrapper=styled.div`
canvas{
  height:800px;
  background-color: #282c34;
}
`
;

export default App;


