import './App.css';
import {Canvas} from "@react-three/fiber";
import styled from 'styled-components';
import { Suspense,useState,useRef} from 'react';
import {CubeTransparent} from "./components/CubeTransparent";
import { ANIMATION_DIRECTIONS, CUBE_FACES, CUBE_AREAS} from './utils/enums';
import { INITIAL_CAMERA_ANGLES } from './utils/facesPositions';
import {OrbitControls} from '@react-three/drei';
import Tooltip from "@material-ui/core/Tooltip";
import {withStyles} from "@material-ui/core/styles";
import {ExtraInfoHTML} from "./components/ExtraInfo";

//Styled components wrapper
const Wrapper=styled.div`
  canvas{
    height: 90vh;
    background-color: transparent;
    margin-left:10vw;
  }
  @media only screen and (max-width:850px){
    canvas{
      margin-left:0;
    }
  }
  `;

const ExtraInfoTooltip = withStyles(theme => ({
   tooltip: {
    backgroundColor: "rgba(6, 127, 128,0.90)",
    color: "#0cfeff",
    fontSize: "24px",
    fontFamily:"Orbitron, serif",
    border: "2px solid #0cfeff",
    maxWidth:"325px",
    "@media only screen and (max-width:850px)":{
      fontSize: "16px",
    }
  },
  arrow: {
    color: "#0cfeff",

  } 
}))(Tooltip);

function App() {
  const [animation, setAnimation] =useState(ANIMATION_DIRECTIONS.STANDBY);
  const [isBtnDisabled,setIsBtnDisabled]=useState(true);
  const [arrowsStyle,setArrowsStyle]=useState("opacity0");
  const [extraInfo, setExtraInfo]= useState(CUBE_AREAS.NONE);
  const [isTooltipOpen, setIsTooltipOpen]=useState(false);
  const [mousePosition, setMousePosition] = useState({ x: undefined, y: undefined });
  const orbitControls= useRef();
  const initialPolarAngle= INITIAL_CAMERA_ANGLES.POLAR;
  const initialAzimuthalAngle= INITIAL_CAMERA_ANGLES.AZIMUTHAL;

  return (
    <Wrapper className="App">
      <div className="contentContainer">
        <div className="buttonsContainer" onMouseEnter={()=>{setIsTooltipOpen(false)}}>
          <div className="facesTextContainer">
            <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.INFO); setIsBtnDisabled(true)}} disabled={isBtnDisabled}>
              {CUBE_FACES.INFO}
              </button>
              <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.EDUCATION); setIsBtnDisabled(true)}} disabled={isBtnDisabled}>
              {CUBE_FACES.EDUCATION}
              </button>
              <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.SKILLS); setIsBtnDisabled(true)}} disabled={isBtnDisabled}>
              {CUBE_FACES.SKILLS}
              </button>
              <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.TECHNOLOGIES); setIsBtnDisabled(true)}} disabled={isBtnDisabled}>
              {CUBE_FACES.TECHNOLOGIES}
              </button>
              <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.EXPERIENCE); setIsBtnDisabled(true)}} disabled={isBtnDisabled}>
              {CUBE_FACES.EXPERIENCE}
              </button>
              <button  className="btnDirection" onClick={()=>{setAnimation(CUBE_FACES.INTERESTS); setIsBtnDisabled(true)}} disabled={isBtnDisabled}>
              {CUBE_FACES.INTERESTS}
            </button>   
          </div>
        </div>
          <ExtraInfoTooltip 
            interactive
            open={isTooltipOpen}
            onClose={()=>setIsTooltipOpen(false)}
            title={
              <ExtraInfoHTML area={extraInfo}></ExtraInfoHTML>
            }
            //Make tooltip shown at cursor coordinates
            onMouseMove={e => setMousePosition({ x: e.pageX, y: e.pageY })}
            PopperProps={{
              anchorEl: {
                clientHeight: 0,
                clientWidth: 0,
                getBoundingClientRect: () => ({
                  top: mousePosition.y,
                  left: mousePosition.x,
                  right: mousePosition.x,
                  bottom: mousePosition.y,
                  width: 0,
                  height: 0,
                })
              }
            }}
          >
          <div className="canvasContainer">
            <Canvas className="canvas" >
              <Suspense fallback={null}>
                <directionalLight position={[10,4,1]} intensity={0.07} color={0x66afd9}/>
                <directionalLight position={[-10,-4,-1]} intensity={0.07} color={0x66afd9}/>
                <OrbitControls ref={orbitControls} enableZoom={false}/>
                <CubeTransparent 
                animation={animation}
                //Event after loading page
                afterStart={()=>{              
                  setTimeout(function() {
                    //Make arrows visible
                    setArrowsStyle("arrowImage");
                    //Enable buttons
                    setIsBtnDisabled(false);
                    setTimeout(function() {
                      //Disable opacity transition
                      setArrowsStyle("arrowImage noTransition");
                    }, 1200);  
                  }, 2000);       
                }}
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
                  setIsBtnDisabled(false);
                }}

                //Change contents of tooltip
                onExtraInfoChange={(newInfo)=>{
                  if(newInfo !== extraInfo){
                    setExtraInfo(""); 
                    setExtraInfo(newInfo);
                  }   
                }}

                //Change if tooltip is shown
                onInAreaChange={(inArea)=>{
                  if(inArea !== isTooltipOpen){
                    if(!inArea){
                      setTimeout(function() {
                      setIsTooltipOpen(inArea); 
                      }, 100);
                    } else {
                      setIsTooltipOpen(inArea);
                    }  
                  }   
                }}
                />
              </Suspense>
            </Canvas>  
            <div className="upDiv noOutline" >
              <img className={arrowsStyle} src="./arrow.png" alt="Up arrow" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.UP); setIsBtnDisabled(true)}} disabled={isBtnDisabled} />
            </div>
            <div className="downDiv noOutline">
              <img className={arrowsStyle}  src="./arrow.png" alt="Down arrow" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.DOWN); setIsBtnDisabled(true)}} disabled={isBtnDisabled}/>
            </div> 
            <div className="leftDiv noOutline">
              <img className={arrowsStyle}  src="./arrow.png" alt="Left arrow" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.LEFT); setIsBtnDisabled(true)}} disabled={isBtnDisabled}/>
            </div> 
            <div className="rightDiv noOutline">
              <img className={arrowsStyle}  src="./arrow.png" alt="Right arrow" onClick={()=>{setAnimation(ANIMATION_DIRECTIONS.RIGHT); setIsBtnDisabled(true)}} disabled={isBtnDisabled}/>
            </div> 
          </div>
        </ExtraInfoTooltip>
      </div>
      <ExtraInfoTooltip title={<div style={{fontSize:"16px"}}>Github repository</div>} >
        <div className="floatingDivLeft noOutline">
          <a href="https://github.com/EDRD1/edrd-web-app" target="_blank" rel="noreferrer"> 
            <img className="githubImage"  src="./github-logo.png" alt="Github logo"/>
          </a>
        </div>
      </ExtraInfoTooltip>
    </Wrapper> 
  );
};



export default App;


