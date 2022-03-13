import { OPERATORS } from "./enums";

//Get += or -= based on number
export function getPlusMinus (num){
    if( num >= 0){
      return OPERATORS.PLUS_EQ;
    }else {
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
    if( angle > 100){
        return angle * (factor/100)
    }else{
        if( angle > 10){
            return angle * (factor/10)
        }else{
            return angle * factor;  
        }
    }  
};