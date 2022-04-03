import { OPERATORS, SOUNDS, CUBE_FACES} from "./enums";
import { face_areas, face_indexes } from "./facesPositions";
import { useRef,useEffect } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------------------------------ */
//Get += or -= based on number
export function getPlusMinus (num){
    if( num >= 0){
        return OPERATORS.PLUS_EQ;
    } else {
        return OPERATORS.MINUS_EQ;
    }
  };

/* ------------------------------------------------------------------------------------------ */
//Get angle difference betewn two angles and if need to add or substract to get to wantedAngle
export function getAngleToMove (currentAngle,wantedAngle){
    let angle_=0;
    let plusMinus_="+="; 
    let currentAngle_= THREE.Math.radToDeg(currentAngle);
    let wantedAngle_= THREE.Math.radToDeg(wantedAngle);
    angle_= (currentAngle_ - wantedAngle_);
    angle_= angle_ - 360 * Math.round(angle_/360);
    plusMinus_= getPlusMinus(-(angle_));
    angle_= angle_ < 0 ? -(angle_) : angle_;
    angle_= THREE.Math.degToRad(angle_);
    return { angle : angle_, plusMinus : plusMinus_ };
};

/* ------------------------------------------------------------------------------------------ */
//Get duration of animation based on angle
export function getDuration(angle){
    const factor=0.18;
    if ( angle > 100){
        return angle * (factor/100)
    } else {
        if ( angle > 10){
            return angle * (factor/10)
        } else {
            return angle * factor;  
        }
    }  
};

/* ------------------------------------------------------------------------------------------ */
//Find if point inside certain area of a face
export function isInsideArea(face, x ,y){
    //Find if x and y of point given is inside areas coordinates
    function pointInside(x1, y1, x2, y2, x, y)
    {
        if (x > x1 && x < x2 && y < y1 && y > y2){
            return true;
        }
        return false;
    };
    let inArea_= false, area_=null;
    //Iterate areas on face and check if point is inside
    for (let areaObj in face_areas[face]) {
        if(pointInside(face_areas[face][areaObj].upperLeft.x, 
            face_areas[face][areaObj].upperLeft.y, 
            face_areas[face][areaObj].lowerRight.x, 
            face_areas[face][areaObj].lowerRight.y, 
            x, y)){
            inArea_= true;
            area_= areaObj;
            break;
        }
    }
   return {inArea:inArea_,area:area_};
};

/* ------------------------------------------------------------------------------------------ */
//Sounds for cube movement
let soundNext= new Audio("./sounds/sound1.ogg");
let soundPrev= new Audio("./sounds/sound2.ogg");
let soundExpand= new Audio("./sounds/sound3.ogg");

export function playAudio( audio){
    soundNext.pause();
    soundNext.currentTime = 0;  
    soundPrev.pause();
    soundPrev.currentTime = 0;
    soundExpand.pause();
    soundExpand.currentTime = 0;  
    switch (audio) {
        case SOUNDS.NEXT:
            soundNext.play();
            break;
        case SOUNDS.PREV:
            soundPrev.play();
            break;
        case SOUNDS.EXPAND:
            soundExpand.play();
            break;
        default:
            break;
    }
};

/* ------------------------------------------------------------------------------------------ */
//To get previous state
export function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; 
    },[value]); 
    return ref.current; 
};

/* ------------------------------------------------------------------------------------------ */
//Get wich side of cube with face index given
export function getFace(index){
    let res= "";
    switch (index) {
        case face_indexes[CUBE_FACES.INFO].lower: 
        case face_indexes[CUBE_FACES.INFO].upper:
            res=CUBE_FACES.INFO; 
            break;
        case face_indexes[CUBE_FACES.EDUCATION].lower:
        case face_indexes[CUBE_FACES.EDUCATION].upper:
            res=CUBE_FACES.EDUCATION; 
            break;
        case face_indexes[CUBE_FACES.SKILLS].lower:
        case face_indexes[CUBE_FACES.SKILLS].upper:
            res=CUBE_FACES.SKILLS; 
            break;
        case face_indexes[CUBE_FACES.TECHNOLOGIES].lower:
        case face_indexes[CUBE_FACES.TECHNOLOGIES].upper:
            res=CUBE_FACES.TECHNOLOGIES; 
            break;
        case face_indexes[CUBE_FACES.EXPERIENCE].lower: 
        case face_indexes[CUBE_FACES.EXPERIENCE].upper:
            res=CUBE_FACES.EXPERIENCE; 
            break;
        case face_indexes[CUBE_FACES.INTERESTS].lower: 
        case face_indexes[CUBE_FACES.INTERESTS].upper:
            res=CUBE_FACES.INTERESTS; 
            break;
        default:
          break;
      }
      return res;
};
