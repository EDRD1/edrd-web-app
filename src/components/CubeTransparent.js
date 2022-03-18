import React, { useRef,useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ANIMATION_DIRECTIONS, CUBE_FACES, ROTATION_ORDERS, OPERATORS } from "../utils/enums";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import {positions} from "../utils/facesPositions";
import {getAngleToMove,getDuration} from "../utils/utils";

const gltfName="/cubeTransparent2_d.gltf" ;
useGLTF.preload(gltfName);

export  function CubeTransparent(props) {
  
  const myGroup = useRef();
  const { nodes, materials, scene } = useGLTF(gltfName);
  scene.background= new THREE.Color(0x282c34);
  const{camera} =useThree();
  //Initial camera settings
  const aspectRatio=16/9;
  const fov = 50;
  //Add rezise event listener to window
  window.addEventListener('resize', handleResize);
  function handleResize(){
    //limit when rezise is executed
    if (window.innerWidth > 849){
      return;
    }
    const newAspect = window.innerWidth / window.innerHeight;
    if (newAspect < aspectRatio) {
      //When window is too narrow
      camera.aspect= newAspect;
      const cameraHeight = Math.tan(THREE.MathUtils.degToRad(fov / 2));
      const ratio = camera.aspect / aspectRatio;
      const newCameraHeight = cameraHeight / ratio;
      let newFov= THREE.MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
      camera.fov =newFov;
       
    } else {
      //When window fits camera
      camera.aspect=aspectRatio;
      camera.fov=fov;
    }
   camera.updateProjectionMatrix();
  };

  useEffect(() => {
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  },[]);
  
  

  //Render animation
  useEffect(() => {
    let angleToMove, plusMinus, complete, converted;
    //Rotate x axis based on parameters
    function rotateXAxis(sign,amount,duration,delay_,finish, noConvertion){
      complete= finish ? props.onAnimationDone: null;
      converted= noConvertion ? amount : amount * (Math.PI/180); 
      myGroup.current.rotation.order=ROTATION_ORDERS.X;
        gsap.to(myGroup.current.rotation,{
          x: sign + converted,
          duration: duration,
          delay: delay_,
          onComplete: complete
        });
    };

    //Rotate y axis based on parameters
    function rotateYAxis(sign,amount,duration,delay_,finish, noConvertion){
      complete= finish ? props.onAnimationDone: null;
      converted= noConvertion ? amount : amount * (Math.PI/180); 
      myGroup.current.rotation.order=ROTATION_ORDERS.Y;
        gsap.to(myGroup.current.rotation,{
          y: sign + converted,
          duration: duration,
          delay: delay_,
          onComplete: complete
        });
    };

    //Rotate z axis based on parameters
    function rotateZAxis(sign,amount,duration,delay_,finish, noConvertion){
      complete= finish ? props.onAnimationDone : null;
      converted= noConvertion ? amount : amount * (Math.PI/180); 
      myGroup.current.rotation.order=ROTATION_ORDERS.Z;
        gsap.to(myGroup.current.rotation,{
          z: sign + converted,
          duration: duration,
          delay: delay_,
          onComplete: complete
        });
    };

    //Rotate x,y,z axis to show wanted face
    function showFace(face){
      let angleSign, delay_=0,  duration_;
      angleSign= getAngleToMove(myGroup.current.rotation.x, positions[face].x);
      angleToMove= angleSign.angle;
      plusMinus= angleSign.plusMinus;
      duration_=getDuration(angleToMove);
      rotateXAxis(plusMinus, angleToMove, duration_, delay_, false,  true);
      delay_+= duration_ + 0.1;
      angleSign= getAngleToMove(myGroup.current.rotation.y, positions[face].y);
      angleToMove= angleSign.angle;
      plusMinus= angleSign.plusMinus;
      duration_= getDuration(angleToMove);
      rotateYAxis(plusMinus, angleToMove, duration_, delay_, false, true);
      delay_+= duration_ + 0.1;
      angleSign= getAngleToMove(myGroup.current.rotation.z, positions[face].z);
      angleToMove= angleSign.angle;
      plusMinus= angleSign.plusMinus;
      duration_= getDuration(angleToMove);
      rotateZAxis(plusMinus, angleToMove, duration_, delay_, true, true);
    }

    switch (props.animation) {
      case ANIMATION_DIRECTIONS.START:
      //Animate object to appear from  top
        if (myGroup.current.position.y !== 0){
          gsap.to(myGroup.current.position,{
            y: OPERATORS.MINUS_EQ + 7,
            duration: 0.6,
            ease: "power3.out",
            delay: 0
          }); 
        }
        break;
      //Stand by
      case ANIMATION_DIRECTIONS.STANDBY:
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
      //Animate to show INFO face
      case CUBE_FACES.INFO:
        showFace(CUBE_FACES.INFO);
        break;
      //Animate to show EDUCATION face
      case CUBE_FACES.EDUCATION:
        showFace(CUBE_FACES.EDUCATION);
        break;
      //Animate to show SKILLS face
      case CUBE_FACES.SKILLS:
        showFace(CUBE_FACES.SKILLS);
        break;
      //Animate to show TECHNOLOGIES face
      case CUBE_FACES.TECHNOLOGIES:
        showFace(CUBE_FACES.TECHNOLOGIES);
        break;
      //Animate to show EXPERIENCE face
      case CUBE_FACES.EXPERIENCE:
        showFace(CUBE_FACES.EXPERIENCE);
        break;
      //Animate to show INTERESTS face
      case CUBE_FACES.INTERESTS:
        showFace(CUBE_FACES.INTERESTS);
        break;
    default:
        break;
    }

  }, [props.animation,props.onAnimationDone,props]);
  
  return (
    <group ref={myGroup} scale={[2,2,2]} position={[0,7,0]} dispose={null} >
      <mesh geometry={nodes.Cube.geometry} material={materials.transparent} />
    </group>
  )
};


