import { OPERATORS} from "./enums";
import { face_areas } from "./facesPositions";

//Get += or -= based on number
export function getPlusMinus (num){
    if( num >= 0){
        return OPERATORS.PLUS_EQ;
    } else {
        return OPERATORS.MINUS_EQ;
    }
  };

//Get angle difference betewn two angles and if need to add or substract to get to wantedAngle
export function getAngleToMove (currentAngle,wantedAngle){
    let angle_= currentAngle - wantedAngle;
    let plusMinus_= getPlusMinus(-(angle_));
    angle_= angle_ < 0 ? -(angle_) : angle_;
    return { angle : angle_, plusMinus : plusMinus_ };
};

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

