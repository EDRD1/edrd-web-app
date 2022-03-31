import { CUBE_FACES,CUBE_AREAS } from "./enums";

//Positions of cube in wich referenced face is showing
export const positions={
    [CUBE_FACES.INFO]:{ x:0 , y:0 , z:0 },
    [CUBE_FACES.EDUCATION]:{ x:1.570796 , y:0 , z:0},
    [CUBE_FACES.INTERESTS]:{ x:-3.141592 , y:0 , z:0},
    [CUBE_FACES.EXPERIENCE]:{ x:-1.570796 , y:0 , z:0},
    [CUBE_FACES.SKILLS]:{ x:0 , y:-1.570796 , z:0},
    [CUBE_FACES.TECHNOLOGIES]:{ x:0 , y:1.570796 , z:0}
};
Object.freeze(positions);

//Indexes of cube faces
export const face_indexes={
    [CUBE_FACES.INFO]:{upper:1408, lower:1409},
    [CUBE_FACES.EDUCATION]:{upper:1, lower:0},
    [CUBE_FACES.INTERESTS]:{upper:1348, lower:1349},
    [CUBE_FACES.EXPERIENCE]:{upper:2698, lower:2699},
    [CUBE_FACES.SKILLS]:{upper:1378, lower:1379},
    [CUBE_FACES.TECHNOLOGIES]:{upper:1318, lower:1319}
};
Object.freeze(face_indexes);

//Initial camear angles
export const INITIAL_CAMERA_ANGLES={
    POLAR:1.5707963267948966,
    AZIMUTHAL:0,
    X:-6.123233995736766e-17,
    Y:0,
    Z:0
};
Object.freeze(INITIAL_CAMERA_ANGLES);

//Areas of interest in cube faces
export const face_areas={
    [CUBE_FACES.INFO]:{
        [CUBE_AREAS.NAME]:{
            upperLeft:{x:-1.39, y:1.26},
            lowerRight:{x:1.51, y:0.85}
        },
        [CUBE_AREAS.BIRTH_DATE]:{
            upperLeft:{x:-1.39, y:0.68},
            lowerRight:{x:0.62, y:0.31}
        },
        [CUBE_AREAS.LOCATION]:{
            upperLeft:{x:-1.39, y:0.086},
            lowerRight:{x:1.67, y:-0.29}
        },
        [CUBE_AREAS.PHONE_NUMBER]:{
            upperLeft:{x:-1.39, y:-0.51},
            lowerRight:{x:1.06, y:-0.87}
        },
        [CUBE_AREAS.EMAIL]:{
            upperLeft:{x:-1.39, y:-1.10},
            lowerRight:{x:1.56, y:-1.47}
        },
    },
    [CUBE_FACES.EDUCATION]:{
        [CUBE_AREAS.UNIVERSITY]:{
            upperLeft:{x:-1.43, y:0.84},
            lowerRight:{x:1.69, y:0.62}
        },
        [CUBE_AREAS.DEGREE]:{
            upperLeft:{x:-1.43, y:0.50},
            lowerRight:{x:1.45, y:0.26}
        },
        [CUBE_AREAS.HIGHSCHOOL]:{
            upperLeft:{x:-0.50, y:-0.11},
            lowerRight:{x:1.72, y:-0.36}
        },
        [CUBE_AREAS.DIPLOMA]:{
            upperLeft:{x:-0.50, y:-0.45},
            lowerRight:{x:1.23, y:-0.70}
        }
    },
    [CUBE_FACES.INTERESTS]:{
        [CUBE_AREAS.FINANCE]:{
            upperLeft:{x:-1.68, y:1.18},
            lowerRight:{x:-0.26, y:-0.08}
        },
        [CUBE_AREAS.VIDEO_EDITING]:{
            upperLeft:{x:0.40, y:1.18},
            lowerRight:{x:1.76, y:-0.25}
        },
        [CUBE_AREAS.GAMING]:{
            upperLeft:{x:-0.62, y:-0.51},
            lowerRight:{x:0.76, y:-1.76}
        }
    },
    [CUBE_FACES.EXPERIENCE]:{
        [CUBE_AREAS.INEGI_TOP]:{
            upperLeft:{x:-1.05, y:1.11},
            lowerRight:{x:1.58, y:0.90}
        },
        [CUBE_AREAS.DELPHI_DEV]:{
            upperLeft:{x:-1.05, y:0.84},
            lowerRight:{x:0.42, y:0.78}
        },
        [CUBE_AREAS.GITLAB]:{
            upperLeft:{x:-1.05, y:0.72},
            lowerRight:{x:1.31, y:0.66}
        },
        [CUBE_AREAS.INEGI_MIDDLE]:{
            upperLeft:{x:-1.05, y:0.28},
            lowerRight:{x:1.58, y:0.091}
        },
        [CUBE_AREAS.JSF]:{
            upperLeft:{x:-1.05, y:0.04},
            lowerRight:{x:1.41, y:-0.14}
        },
        [CUBE_AREAS.INEGI_BOTTOM]:{
            upperLeft:{x:-1.05, y:-0.51},
            lowerRight:{x:1.58, y:-0.71}
        },
        [CUBE_AREAS.VBA]:{
            upperLeft:{x:-1.05, y:-0.76},
            lowerRight:{x:1.36, y:-0.84}
        },
        [CUBE_AREAS.CSHARP_DEV]:{
            upperLeft:{x:-1.05, y:-0.88},
            lowerRight:{x:1.63, y:-0.95}
        }
    },
    [CUBE_FACES.SKILLS]:{
        [CUBE_AREAS.ENGLISH]:{
            upperLeft:{x:-1.63, y:0.80},
            lowerRight:{x:1.60, y:0.37}
        },
        [CUBE_AREAS.GRAPHIC_DESIGN]:{
            upperLeft:{x:-1.63, y:0.36},
            lowerRight:{x:1.60, y:0.04}
        },
        [CUBE_AREAS.ADAPTABILITY]:{
            upperLeft:{x:-1.85, y:0.03},
            lowerRight:{x:1.60, y:-0.47}
        },
        [CUBE_AREAS.WORK_ETHIC]:{
            upperLeft:{x:-1.38, y:-0.46},
            lowerRight:{x:1.60, y:-0.88}
        }
    },
    [CUBE_FACES.TECHNOLOGIES]:{
        [CUBE_AREAS.JAVASCRIPT]:{
            upperLeft:{x:-0.58, y:1.27},
            lowerRight:{x:0.60, y:0.70}
        },
        [CUBE_AREAS.DELPHI]:{
            upperLeft:{x:-1.80, y:0.40},
            lowerRight:{x:-0.87, y:-0.24}
        },
        [CUBE_AREAS.JAVA]:{
            upperLeft:{x:-1.00, y:-0.91},
            lowerRight:{x:-0.06, y:-1.46}
        },
        [CUBE_AREAS.GIT]:{
            upperLeft:{x:0.25, y:-1.09},
            lowerRight:{x:1.16, y:-1.56}
        },
        [CUBE_AREAS.CSHARP]:{
            upperLeft:{x:0.53, y:-0.38},
            lowerRight:{x:1.49, y:-0.81}
        },
        [CUBE_AREAS.SQL]:{
            upperLeft:{x:0.86, y:0.50},
            lowerRight:{x:1.74, y:-0.08}
        }
    }
};
Object.freeze(face_areas);
