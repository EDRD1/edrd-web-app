import React, { useRef,useEffect,useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ANIMATION_DIRECTIONS, CUBE_FACES, ROTATION_ORDERS, OPERATORS, SOUNDS } from "../utils/enums";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import {positions} from "../utils/facesPositions"; 
import {isInsideArea, usePrevious, getFace, playAudio} from "../utils/utils";

const gltfName="/cubeTransparent_d.gltf" ;
useGLTF.preload(gltfName);
let currentTextureArea="";
let newEmissiveMap=new THREE.Texture();
const imageElement = new Image();

/* ------------------------------------------------------------------------------------------ */
export  function CubeTransparent(props) {
  //Declaring refs for group and mesh
  const myCubeGroup = useRef();
  const myCubeMesh = useRef();
  const myMaterial = useRef();
  const isAnimating=useRef(false);
  const prevAnimation= usePrevious(props.animation);
  //Get nodes,materials and scene from model
  const { nodes, materials, scene } = useGLTF(gltfName);
  scene.background= new THREE.Color(0x282c34);
  //Get camera object and intersetct from cursor
  const{camera,raycaster} =useThree();
  //Camera raycaster
  const raycasterCamera= useMemo(() => new THREE.Raycaster(),[]);
  raycasterCamera.setFromCamera( new THREE.Vector2(), camera );
  //Correct rotation quaternion
  const wantedQaternion= useMemo(() => new THREE.Quaternion(),[]);
  //Initial camera settings
  const aspectRatio=1.35;
  const fov = 75;
  //Add rezise event listener to window
  window.addEventListener("resize", handleResize);
  /* ------------------------------------------------------------------------------------------ */
  //Hande mouseMove for extra features
  function handleMouseMove(e){
    //Only process mouse movement if cube not in animations
    if(props.animation === ANIMATION_DIRECTIONS.STANDBY && !isAnimating.current){
      console.log("render");
      //Wait for image to load to change texture
      imageElement.onload = function () {
        newEmissiveMap.image= imageElement;        
        myMaterial.current.emissiveMap.copy(newEmissiveMap);
      };
      //Get raycaster intersection with cube
      const intersects= raycaster.intersectObject(myCubeMesh.current,false);
      //Get face of intersection and evaluate if point inside notable area
      const face_=getFace(intersects[0].faceIndex);
      let resultObject= isInsideArea(face_, intersects[0].point.x, intersects[0].point.y);    
      if(resultObject !== null){
        if(resultObject.inArea){
          //Change texture to highlight area
          if(resultObject.area !== currentTextureArea){
            imageElement.src="./textures/texture_sel2_" + resultObject.area + ".jpg";
            document.getElementById("canvasDiv").style.cursor = "pointer";
            currentTextureArea=resultObject.area; 
          }
        } else {
          if(currentTextureArea !== ""){
            //Return to original texture
            imageElement.src="./textures/texture_opt.jpg";
            document.getElementById("canvasDiv").style.cursor = "default";
            currentTextureArea="";
            props.onInAreaChange(false);
          }   
        }
      }
    }
  };
  /* ------------------------------------------------------------------------------------------ */
  //Mesh click handler
  function onClickMesh(e){
    if(currentTextureArea !== ""){
      props.onXYChange([e.clientX,e.clientY]); 
      props.onExtraInfoChange(currentTextureArea);
      props.onInAreaChange(true);
    }
  }; 
  /* ------------------------------------------------------------------------------------------ */
  //Resize handler
  function handleResize(){
    let wFactor = 0.7;
    let hFactor = 1;
    let fov_=fov;
    //limit when rezise is executed
     if (window.innerWidth < 849){
      wFactor= 1;
      hFactor= 0.8;
      fov_=62;
    } 
     const newAspect = (window.innerWidth * wFactor)/ (window.innerHeight * hFactor);
    if (newAspect < aspectRatio) {
      //When window is too narrow
      camera.aspect= newAspect;
      const cameraHeight = Math.tan(THREE.MathUtils.degToRad(fov_ / 2));
      const ratio = camera.aspect / aspectRatio;
      const newCameraHeight = cameraHeight / ratio;
      let newFov= THREE.MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
      camera.fov =newFov;
    } else {
      //When window fits camera
      camera.fov= fov;
    }
   camera.updateProjectionMatrix();
  };
  /* ------------------------------------------------------------------------------------------ */
  //Adjust size at start
  useEffect(() => {
    handleResize();
    //Asign material
    myMaterial.current.copy(materials.transparent);
    newEmissiveMap.copy(materials.transparent.emissiveMap);
    //Animate object to appear from  top
    if (myCubeGroup.current.position.y !== 0){
      gsap.to(myCubeGroup.current.position,{
        y: OPERATORS.MINUS_EQ + 7,
        duration: 0.6,
        ease: "power3.out",
        delay: 0
      }); 
    }
    props.afterStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  },[]);
  /* ------------------------------------------------------------------------------------------ */
  //Render animations
  useEffect(() => {
    let complete, converted;
    /* ------------------------------------------------------------------------------------------ */
    //Rotate x axis based on parameters
    function rotateXAxis(sign,amount,duration,delay_,finish, noConvertion){
      complete= finish ? props.onAnimationDone: null;
      converted= noConvertion ? amount : amount * (Math.PI/180); 
      myCubeGroup.current.rotation.order=ROTATION_ORDERS.X;
        gsap.to(myCubeGroup.current.rotation,{
          x: sign + converted,
          duration: duration,
          delay: delay_,
          onComplete: complete
        });
    };
    /* ------------------------------------------------------------------------------------------ */
    //Rotate y axis based on parameters
    function rotateYAxis(sign,amount,duration,delay_,finish, noConvertion){
      complete= finish ? props.onAnimationDone: null;
      converted= noConvertion ? amount : amount * (Math.PI/180); 
      myCubeGroup.current.rotation.order=ROTATION_ORDERS.Y;
        gsap.to(myCubeGroup.current.rotation,{
          y: sign + converted,
          duration: duration,
          delay: delay_,
          onComplete: complete
        });
    };
    /* ------------------------------------------------------------------------------------------ */
    //Compare and correct current rotation of cube to wanted rotation to show face
    function showFace(face){
      wantedQaternion.setFromEuler(new THREE.Euler( positions[face].x, positions[face].y, positions[face].z, 'XYZ' ));
      let isEqualQuaternion=wantedQaternion.equals(myCubeGroup.current.quaternion);
      let duration_=isEqualQuaternion ? 0.001 : 1;
        gsap.to({}, {
            duration: duration_,
            onUpdate: function() {
              myCubeGroup.current.quaternion.slerp(wantedQaternion, this.progress());
            },
            onComplete:props.onAnimationDone 
        });
        setTimeout(function() {
          isAnimating.current=false;
        }, duration_*1000);          
    };
    /* ------------------------------------------------------------------------------------------ */
    //Correct position of face if needed
    function detectFaceAndCorrect(){
      const intersectsCamera= raycasterCamera.intersectObject(myCubeMesh.current,false);
      showFace(getFace(intersectsCamera[0].faceIndex));     
    };
    /* ------------------------------------------------------------------------------------------ */
    //Compare if current face same as wanted face and show it
    function compareFaceAndShow(sound){
      const intersectsCamera= raycasterCamera.intersectObject(myCubeMesh.current,false);
      if(getFace(intersectsCamera[0].faceIndex) !== props.animation){
        playAudio(sound);
      }
      showFace(props.animation);
    };
    /* ------------------------------------------------------------------------------------------ */
    //Only enter when animation changes
    if(props.animation === prevAnimation) {
      return;
    }
    isAnimating.current= true;
    switch (props.animation) {
      //Starging
      case ANIMATION_DIRECTIONS.START:
        break;
      //Stand by
      case ANIMATION_DIRECTIONS.STANDBY:
        //Camera raycaster intersect to check current face
        if([ANIMATION_DIRECTIONS.UP, ANIMATION_DIRECTIONS.DOWN, ANIMATION_DIRECTIONS.LEFT, ANIMATION_DIRECTIONS.RIGHT].includes(prevAnimation)){
          detectFaceAndCorrect();
        }
        break;
      //Animate cube to show next face on top
      case ANIMATION_DIRECTIONS.UP:
        rotateXAxis(OPERATORS.MINUS_EQ, 20, 0.3, 0, false, false);
        rotateXAxis(OPERATORS.PLUS_EQ, 120, 0.3, 0.4, false, false);
        rotateXAxis(OPERATORS.MINUS_EQ, 10, 0.2, 0.8, true, false);     
        break;
      //Animate cube to show next face down
      case ANIMATION_DIRECTIONS.DOWN:
        rotateXAxis(OPERATORS.PLUS_EQ, 20, 0.3, 0, false, false);
        rotateXAxis(OPERATORS.MINUS_EQ, 120, 0.3, 0.4, false, false);
        rotateXAxis(OPERATORS.PLUS_EQ, 10, 0.2, 0.8, true, false);
        break;
      //Animate cube to show next face to the right
      case ANIMATION_DIRECTIONS.RIGHT:
        rotateYAxis(OPERATORS.PLUS_EQ, 20, 0.3, 0, false, false);
        rotateYAxis(OPERATORS.MINUS_EQ, 120, 0.3, 0.4, false, false);
        rotateYAxis(OPERATORS.PLUS_EQ, 10, 0.2, 0.8, true, false);
        break;
      //Animate cube to show next face to the left
      case ANIMATION_DIRECTIONS.LEFT:
        rotateYAxis(OPERATORS.MINUS_EQ, 20, 0.3, 0, false, false);
        rotateYAxis(OPERATORS.PLUS_EQ, 120, 0.3, 0.4, false, false);
        rotateYAxis(OPERATORS.MINUS_EQ, 10, 0.2, 0.8, true, false);
        break;
      //Show INFO face
      case CUBE_FACES.INFO:
        compareFaceAndShow(SOUNDS.PREV);
        break;
      //Show EDUCATION face
      case CUBE_FACES.EDUCATION:
        compareFaceAndShow(SOUNDS.NEXT);
        break;
      //Show SKILLS face
      case CUBE_FACES.SKILLS:
        compareFaceAndShow(SOUNDS.NEXT);
        break;
      //Show TECHNOLOGIES face
      case CUBE_FACES.TECHNOLOGIES:
        compareFaceAndShow(SOUNDS.PREV);
        break;
      //Show EXPERIENCE face
      case CUBE_FACES.EXPERIENCE:
        compareFaceAndShow(SOUNDS.PREV);
        break;
      //Show INTERESTS face
      case CUBE_FACES.INTERESTS:
        compareFaceAndShow(SOUNDS.PREV);
        break;
    default:
        break;
    }
    

  }, [props.animation,props.onAnimationDone,prevAnimation,raycasterCamera,wantedQaternion]);

  /* ------------------------------------------------------------------------------------------ */
  return (
    <group ref={myCubeGroup} scale={[1.9,1.9,1.9]} position={[0,7,0]} dispose={null} >
      <mesh ref={myCubeMesh} geometry={nodes.Cube.geometry} onPointerMove={handleMouseMove} onClick={onClickMesh}>
        <meshStandardMaterial ref={myMaterial} />
      </mesh>
    </group>
  )
};


