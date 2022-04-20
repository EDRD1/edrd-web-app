import React, { useRef,useState,useEffect} from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export function Arrow({ ...props }) {
  const group = useRef();
  const myMesh = useRef();
  //Declare material to change properties
  const myMaterial= useRef();
  const { nodes, materials } = useGLTF("/arrowGlow.gltf");
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  useFrame(({ camera }) => {
    //Keep arrows at the same position when camera rotates
    group.current.position.copy(camera.position);
    if(props.yPosition !== 0){
      group.current.translateX(props.yPosition); 
    } 
    group.current.quaternion.copy(camera.quaternion);
    group.current.rotation.z= group.current.rotation.z + props.zRotation;
    group.current.translateZ(-4);
  });

  useEffect(() => {
    //Assign material
    myMaterial.current.copy(materials.arrow);
    //Opacity transition
    myMaterial.current.opacity=0;
    setTimeout(function() {
      //Make arrows visible
      gsap.to(myMaterial.current,{
        opacity:0.75, 
        duration: 2.5
      }); 
    }, 2000); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    //Change brightness when hovered and clicked
    if(hovered){
      myMaterial.current.emissiveIntensity=2;
      document.getElementById("canvasDiv").style.cursor = "pointer";
    }else{
      myMaterial.current.emissiveIntensity=materials.arrow.emissiveIntensity;
      document.getElementById("canvasDiv").style.cursor = "default";
    }
    if(clicked){
      myMaterial.current.emissiveIntensity=5;
    }else{
      if(hovered){
        myMaterial.current.emissiveIntensity=2;
      }else{
        myMaterial.current.emissiveIntensity=materials.arrow.emissiveIntensity; 
      }
    }
  }, [hovered,clicked,materials.arrow])
  
  
  return (
    <group ref={group} {...props} dispose={null} scale={[0.7,0.7,0.7]} onPointerOver={(event) => setHover(true)} onPointerOut={(event) => setHover(false)} onPointerDown={(event) => setClicked(true)} onPointerUp={(event) => setClicked(false)}>
      <mesh ref={myMesh} geometry={nodes.arrow.geometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial ref={myMaterial} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/arrowGlow.gltf");
