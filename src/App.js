import './App.css';
import {Canvas} from "@react-three/fiber";
import styled from 'styled-components';
import { Suspense,useState} from 'react';
import {CubeTransparent} from "./components/CubeTransparent";
import { ANIMATION_DIRECTIONS, CUBE_FACES } from './utils/enums';



function App() {
  const [animation, setAnimation] =useState("StandBy");
  const [btnDisabled,setBtnDisabled]=useState(false);
  return (
    <Wrapper className="App">
      <header className="App-header">
      <button  className="btnDirection" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.UP);setBtnDisabled(true)}} disabled={btnDisabled}>
        🔺
        </button>
        <button  className="btnDirection" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.DOWN);setBtnDisabled(true)}} disabled={btnDisabled}>
        🔻
        </button>
        <button  className="btnDirection" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.LEFT);setBtnDisabled(true)}} disabled={btnDisabled} >
        ◄
        </button>
        <button  className="btnDirection" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.RIGHT);setBtnDisabled(true)}} disabled={btnDisabled}>
        ►
        </button>
        <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.INFO);setBtnDisabled(true)}} disabled={btnDisabled}>
        {CUBE_FACES.INFO}
        </button>
        <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.EDUCATION);setBtnDisabled(true)}} disabled={btnDisabled}>
        {CUBE_FACES.EDUCATION}
        </button>
        <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.SKILLS);setBtnDisabled(true)}} disabled={btnDisabled}>
        {CUBE_FACES.SKILLS}
        </button>
        <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.LANGUAGES);setBtnDisabled(true)}} disabled={btnDisabled}>
        {CUBE_FACES.LANGUAGES}
        </button>
        <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.EXPERIENCE);setBtnDisabled(true)}} disabled={btnDisabled}>
        {CUBE_FACES.EXPERIENCE}
        </button>
        <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.INTERESTS);setBtnDisabled(true)}} disabled={btnDisabled}>
        {CUBE_FACES.INTERESTS}
        </button>
      </header>
        <Canvas className="canvas" >
          <Suspense fallback={null}>
            <directionalLight position={[10,2,1]} intensity={0.05} color={0x3b79ff}/>
            <directionalLight position={[-10,-1,-1]} intensity={0.05} color={0x3b79ff}/>
            <CubeTransparent animation={animation} onAnimationDone={()=>{setAnimation(ANIMATION_DIRECTIONS.STANDBY);setBtnDisabled(false)}}/>
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


