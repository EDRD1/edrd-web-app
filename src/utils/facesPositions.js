import { CUBE_FACES } from "./enums";

export const positions={
    [CUBE_FACES.INFO]:{ x:0 , y:0 , z:0 },
    [CUBE_FACES.EDUCATION]:{ x:1.570796 , y:0 , z:0},
    [CUBE_FACES.INTERESTS]:{ x:-3.141592 , y:0 , z:0},
    [CUBE_FACES.EXPERIENCE]:{ x:-1.570796 , y:0 , z:0},
    [CUBE_FACES.SKILLS]:{ x:0 , y:-1.570796 , z:0},
    [CUBE_FACES.TECHNOLOGIES]:{ x:0 , y:1.570796 , z:0}
};

export const face_indexes={
    [CUBE_FACES.INFO]:{upper:22568, lower:22569},
    [CUBE_FACES.EDUCATION]:{upper:1, lower:0},
    [CUBE_FACES.INTERESTS]:{upper:22324, lower:22325},
    [CUBE_FACES.EXPERIENCE]:{upper:44650, lower:44651},
    [CUBE_FACES.SKILLS]:{upper:22447, lower:22446},
    [CUBE_FACES.TECHNOLOGIES]:{upper:22203, lower:22202}
};

export const face_areas={
    [CUBE_FACES.INFO]:{
        name:{
            upperLeft:{x:-1.39, y:1.26},
            lowerRight:{x:1.51,y:0.85}
        },
        birth_date:{
            upperLeft:{x:0, y:0},
            lowerRight:{x:0,y:0}
        },
        location:{
            upperLeft:{x:0, y:0},
            lowerRight:{x:0,y:0}
        },
        phone_number:{
            upperLeft:{x:0, y:0},
            lowerRight:{x:0,y:0}
        },
        email:{
            upperLeft:{x:0, y:0},
            lowerRight:{x:0,y:0}
        },
    },
    [CUBE_FACES.EDUCATION]:{upper:1, lower:0},
    [CUBE_FACES.INTERESTS]:{upper:22324, lower:22325},
    [CUBE_FACES.EXPERIENCE]:{upper:44650, lower:44651},
    [CUBE_FACES.SKILLS]:{upper:22447, lower:22446},
    [CUBE_FACES.TECHNOLOGIES]:{upper:22203, lower:22202}
};