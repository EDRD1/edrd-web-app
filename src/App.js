import './App.css';
import {Canvas} from "@react-three/fiber";
import styled from 'styled-components';
import { Suspense,useState,useRef} from 'react';
import {CubeTransparent} from "./components/CubeTransparent";
import { ANIMATION_DIRECTIONS, CUBE_FACES, INITIAL_CAMERA_ANGLES} from './utils/enums';
import {OrbitControls} from '@react-three/drei'

function App() {
  const [animation, setAnimation] =useState(ANIMATION_DIRECTIONS.START);
  const [btnDisabled,setBtnDisabled]=useState(false);
  const orbitControls= useRef();
  const initialPolarAngle= INITIAL_CAMERA_ANGLES.POLAR;
  const initialAzimuthalAngle= INITIAL_CAMERA_ANGLES.AZIMUTHAL;

  return (
    <Wrapper className="App">
      <header className="App-header">
      </header>
      <div className="contentContainer">
        <div className="buttonsContainer">
          <button  className="btnDirection" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.UP); setBtnDisabled(true)}} disabled={btnDisabled}>
            🔺
            </button>
            <button  className="btnDirection" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.DOWN); setBtnDisabled(true)}} disabled={btnDisabled}>
            🔻
            </button>
            <button  className="btnDirection" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.LEFT); setBtnDisabled(true)}} disabled={btnDisabled} >
            ◄
            </button>
            <button  className="btnDirection" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.RIGHT); setBtnDisabled(true)}} disabled={btnDisabled}>
            ►
            </button>
            <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.INFO); setBtnDisabled(true)}} disabled={btnDisabled}>
            {CUBE_FACES.INFO}
            </button>
            <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.EDUCATION); setBtnDisabled(true)}} disabled={btnDisabled}>
            {CUBE_FACES.EDUCATION}
            </button>
            <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.SKILLS); setBtnDisabled(true)}} disabled={btnDisabled}>
            {CUBE_FACES.SKILLS}
            </button>
            <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.TECHNOLOGIES); setBtnDisabled(true)}} disabled={btnDisabled}>
            {CUBE_FACES.TECHNOLOGIES}
            </button>
            <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.EXPERIENCE); setBtnDisabled(true)}} disabled={btnDisabled}>
            {CUBE_FACES.EXPERIENCE}
            </button>
            <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.INTERESTS); setBtnDisabled(true)}} disabled={btnDisabled}>
            {CUBE_FACES.INTERESTS}
          </button>       
        </div>
        <div className="canvasContainer">
          <Canvas className="canvas" >
            <Suspense fallback={null}>
              <directionalLight position={[10,4,1]} intensity={0.07} color={0x66afd9}/>
              <directionalLight position={[-10,-4,-1]} intensity={0.07} color={0x66afd9}/>
              <OrbitControls ref={orbitControls} enableZoom={false}/>
              <CubeTransparent 
                animation={animation} 
                onAnimationDone={()=>{
                  //Returns camera to original state if altered by orbit controls
                  if (Object.values(CUBE_FACES).includes(animation)){
                    if (orbitControls.current.getPolarAngle() !== initialPolarAngle){
                      orbitControls.current.setPolarAngle(initialPolarAngle);
                    }
                    
                    if ( orbitControls.current.getAzimuthalAngle() !== initialAzimuthalAngle){
                      orbitControls.current.setAzimuthalAngle(initialAzimuthalAngle);
                    }
                  }   
                  //Reset animation state and buttons disabled state
                  setAnimation(ANIMATION_DIRECTIONS.STANDBY);
                  setBtnDisabled(false);
                }}
                />
            </Suspense>
          </Canvas>   
        </div>
      </div>
    </Wrapper> 
  )
}

const Wrapper=styled.div`
canvas{
  height:100vh;
  width=100vw;
  background-color: transparent;
}
`
;

export default App;


