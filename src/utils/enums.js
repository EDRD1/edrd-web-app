export const  ANIMATION_DIRECTIONS={
    UP: "Up",
    DOWN: "Down",
    LEFT: "Left",
    RIGHT: "Right",
    STANDBY: "StandBy",
    START: "Start"
};
Object.freeze(ANIMATION_DIRECTIONS);

export const CUBE_FACES={
    INFO:"Info",
    EDUCATION:"Education",
    SKILLS:"Skills",
    TECHNOLOGIES:"Technologies",
    EXPERIENCE:"Experience",
    INTERESTS:"Interests"
};
Object.freeze(CUBE_FACES);

export const ROTATION_ORDERS={
    X:"XYZ",
    Y:"YXZ",
    Z:"ZXY"
};
Object.freeze(ROTATION_ORDERS);

export const OPERATORS={
    PLUS_EQ:"+=",
    MINUS_EQ:"-="
};
Object.freeze(OPERATORS);

export const CUBE_AREAS={
    NONE:"none",
    NAME:"name",
    BIRTH_DATE:"birth_date",
    LOCATION:"location",
    PHONE_NUMBER:"phone_number",
    EMAIL:"email",
    UNIVERSITY:"university",
    DEGREE:"degree",
    HIGHSCHOOL:"highschool",
    DIPLOMA:"diploma",
    FINANCE:"finance",
    VIDEO_EDITING:"video_editing",
    GAMING:"gaming",
    INEGI_TOP:"inegi_top",
    DELPHI_DEV:"delphi_dev",
    GITLAB:"gitlab",
    INEGI_MIDDLE:"inegi_middle",
    JSF:"jsf",
    INEGI_BOTTOM:"inegi_bottom",
    VBA:"vba",
    CSHARP_DEV:"csharp_dev",
    ENGLISH:"english",
    GRAPHIC_DESIGN:"graphic_design",
    ADAPTABILITY:"adaptability",
    WORK_ETHIC:"work_ethic",
    JAVASCRIPT:"javascript",
    DELPHI:"delphi",
    JAVA:"java",
    GIT:"git",
    CSHARP:"csharp",
    SQL:"sql"
};
Object.freeze(CUBE_AREAS);

export const SOUNDS={
    NEXT:"next",
    PREV:"prev",
    EXPAND:"expand"
};
Object.freeze(SOUNDS);

export const FACE_ROTATION_SOUNDS={
    [CUBE_FACES.INFO]:{
        [CUBE_FACES.EDUCATION]:SOUNDS.NEXT,
        [CUBE_FACES.INTERESTS]:SOUNDS.PREV,
        [CUBE_FACES.EXPERIENCE]:SOUNDS.PREV,
        [CUBE_FACES.SKILLS]:SOUNDS.NEXT,
        [CUBE_FACES.TECHNOLOGIES]:SOUNDS.PREV
    },
    [CUBE_FACES.EDUCATION]:{
        [CUBE_FACES.INFO]:SOUNDS.PREV,
        [CUBE_FACES.INTERESTS]:SOUNDS.NEXT,
        [CUBE_FACES.EXPERIENCE]:SOUNDS.PREV,
        [CUBE_FACES.SKILLS]:SOUNDS.PREV,
        [CUBE_FACES.TECHNOLOGIES]:SOUNDS.PREV
    },
    [CUBE_FACES.INTERESTS]:{
        [CUBE_FACES.INFO]:SOUNDS.NEXT,
        [CUBE_FACES.EDUCATION]:SOUNDS.PREV,
        [CUBE_FACES.EXPERIENCE]:SOUNDS.NEXT,
        [CUBE_FACES.SKILLS]:SOUNDS.NEXT,
        [CUBE_FACES.TECHNOLOGIES]:SOUNDS.NEXT
    },
    [CUBE_FACES.EXPERIENCE]:{
        [CUBE_FACES.INFO]:SOUNDS.NEXT,
        [CUBE_FACES.EDUCATION]:SOUNDS.NEXT,
        [CUBE_FACES.INTERESTS]:SOUNDS.PREV,
        [CUBE_FACES.SKILLS]:SOUNDS.NEXT,
        [CUBE_FACES.TECHNOLOGIES]:SOUNDS.NEXT
    },
    [CUBE_FACES.SKILLS]:{
        [CUBE_FACES.INFO]:SOUNDS.PREV,
        [CUBE_FACES.EDUCATION]:SOUNDS.NEXT,
        [CUBE_FACES.INTERESTS]:SOUNDS.PREV,
        [CUBE_FACES.EXPERIENCE]:SOUNDS.PREV,
        [CUBE_FACES.TECHNOLOGIES]:SOUNDS.PREV
    },
    [CUBE_FACES.TECHNOLOGIES]:{
        [CUBE_FACES.INFO]:SOUNDS.NEXT,
        [CUBE_FACES.EDUCATION]:SOUNDS.NEXT,
        [CUBE_FACES.INTERESTS]:SOUNDS.PREV,
        [CUBE_FACES.EXPERIENCE]:SOUNDS.PREV,
        [CUBE_FACES.SKILLS]:SOUNDS.NEXT
    }
};
Object.freeze(FACE_ROTATION_SOUNDS);