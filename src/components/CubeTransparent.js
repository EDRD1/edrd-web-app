import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from "gsap"

useGLTF.preload('/cubeTransparent.gltf')

export  function CubeTransparent({animation}) {
  const myGroup = useRef()
  const myMesh = useRef()
  //const previousAnimation=usePrevious(animation)
  const { nodes, materials,scene } = useGLTF('/cubeTransparent.gltf')
  useEffect(() => {
    switch (animation) {
      case "StandBy":
        break;
      //Animate cube to show next face on top
      case "Up":
        myGroup.current.rotation.order="XYZ"
        gsap.to(myGroup.current.rotation,{
          x:"-="+20*(Math.PI/180),
          duration:0.3,
        })
        gsap.to(myGroup.current.rotation,{
          x:"+="+120*(Math.PI/180),
          duration:0.3,
          delay:0.4
        })
        gsap.to(myGroup.current.rotation,{
          x:"-="+10*(Math.PI/180),
          duration:0.2,
          delay:0.8
        });
        break;
      //Animate cube to show next face on down
      case "Down":
        myGroup.current.rotation.order="XYZ"
        gsap.to(myGroup.current.rotation,{
          x:"+="+20*(Math.PI/180),
          duration:0.3,
        })
        gsap.to(myGroup.current.rotation,{
          x:"-="+120*(Math.PI/180),
          duration:0.3,
          delay:0.4
        })
        gsap.to(myGroup.current.rotation,{
          x:"+="+10*(Math.PI/180),
          duration:0.2,
          delay:0.8
        });
        break;
      //Animate cube to show next face to the right
      case "Right":
        myGroup.current.rotation.order="YXZ"
        gsap.to(myGroup.current.rotation,{
          y:"-="+20*(Math.PI/180),
          duration:0.3,
        })
        gsap.to(myGroup.current.rotation,{
          y:"+="+120*(Math.PI/180),
          duration:0.3,
          delay:0.4
        })
        gsap.to(myGroup.current.rotation,{
          y:"-="+10*(Math.PI/180),
          duration:0.2,
          delay:0.8
        });
        break;
      //Animate cube to show next face to the left
      case "Left":
        myGroup.current.rotation.order="YXZ"
        gsap.to(myGroup.current.rotation,{
          y:"+="+20*(Math.PI/180),
          duration:0.3,
        })
        gsap.to(myGroup.current.rotation,{
          y:"-="+120*(Math.PI/180),
          duration:0.3,
          delay:0.4
        })
        gsap.to(myGroup.current.rotation,{
          y:"+="+10*(Math.PI/180),
          duration:0.2,
          delay:0.8
        });
        break;
    
      default:
        break;
    }
  }, [animation])
  
  return (
    <group ref={myGroup} {...animation} scale={[0.5,0.5,0.5]} dispose={null}>
      <mesh ref={myMesh} geometry={nodes.Cube.geometry} material={materials.transparent} />
    </group>
  )
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]); 
  return ref.current;
}

