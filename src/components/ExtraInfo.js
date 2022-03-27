import React from "react";
import {CUBE_AREAS} from "../utils/enums";
import Typewriter from "typewriter-effect";

//Info to be shown when hovering over areas of cube
export function ExtraInfoHTML(props) {
    switch (props.area) {
        case CUBE_AREAS.NONE:
            break;
        case CUBE_AREAS.NAME:
            return (
                <div>
                    <h4>Elí Daniel Romo Durón</h4>
                    <div>
                        <Typewriter
                        onInit={(typewriter)=>{
                            typewriter
                            .typeString('"Eli" from the bible verse <a href="https://en.wikipedia.org/wiki/Sayings_of_Jesus_on_the_cross#:~:text=Matthew%2027:46" target="_blank" rel="noreferrer">Matthew 27:46</a>.')
                            .start()
                        }}
                        /> 
                    </div>   
                </div>
            );
        case CUBE_AREAS.BIRTH_DATE:
            return (
                <div>
                    <h4>13 of April 1994</h4>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('1994 also saw the birth of <a href="https://en.wikipedia.org/wiki/Amazon_(company)#History" target="_blank" rel="noreferrer">Amazon.com </a>.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.LOCATION:
            return (
                <div>
                    <h4>Aguascalientes</h4>
                    <div>
                    <img className="extraInfoImage" height="150" width="200" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Location_Aguascalientes.png" alt="Map"/>
                    <br/>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString("The 4th smallest Mexican state, most known for the Feria Nacional de San Marcos (San Marcos Fair) which is held in the state's capital.")
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.PHONE_NUMBER:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString("México's international country code is +52.")
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.EMAIL:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('edrd_94@outlook.com')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.UNIVERSITY:
            return (
                <div>
                    <h4>Universidad Autónoma de Aguascalientes</h4>
                    <div>
                    <img className="extraInfoImage" height="100" width="200" src="https://www.uaa.mx/nu/imagenes/logo.gif" alt="Logo"/>
                    <br/>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Founded in 1973, the <a href="https://en.wikipedia.org/wiki/Autonomous_University_of_Aguascalientes" target="_blank" rel="noreferrer">U.A.A.</a> was the first public university in the state.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.DEGREE:
            return (
                <div>
                    <strong>Bachelor degree in informatics and computing technologies</strong>
                    <div>
                    <br/>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Graduates acquire skills in software engineering, IT project management and information processing,  <a href="https://www.uaa.mx/portal/wp-content/uploads/2018/04/lic_en_informatica_eng.pdf" target="_blank" rel="noreferrer">full degree overview</a>.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.HIGHSCHOOL:
            return (
                <div>
                    <h4>Colegio Portugal</h4>
                    <div>
                    <br/>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Founded in 1943, catholic <a href="https://www.colegioportugal.edu.mx/" target="_blank" rel="noreferrer">institution</a> that offers pre, elementary, middle and highschool education.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.DIPLOMA:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Diploma backed by the U.A.A. since Colegio Portugal is an affiliate.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.FINANCE:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Investing, financial health and business.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.VIDEO_EDITING:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Currently learning, made a short video that got more than a million views. <iframe width="300" height="200" src="https://www.youtube.com/embed/hwWZnAqkxfQ"></iframe>')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.GAMING:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Favorite game of all time, "The legend of Zelda ocarina of time" for the nintendo 64. ')
                                .start()
                            }}
                        />
                        <img className="extraInfoImage" height="150" width="200" src="https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg" alt="Game box"/>
                    </div>   
                </div>
            );
        case CUBE_AREAS.INEGI_TOP:
            return (
                <div>
                    <h4>Instituto Nacional de Estadística y Geografía</h4>
                    <div>
                    <img className="extraInfoImage" height="150" width="200" src="https://upload.wikimedia.org/wikipedia/commons/8/89/INEGI.png" alt="Logo"/>
                        <br/>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Autonomous Mexican goverment <a href="https://en.wikipedia.org/wiki/National_Institute_of_Statistics_and_Geography" target="_blank" rel="noreferrer">agency</a> , provides the country with statistical, economical and geographical information of relevance.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.DELPHI_DEV:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Mainly mantaining and implementing new features to existing internal application for data collection on various census.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.GITLAB:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Creation, support and administration of repositories with Gitlab.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.INEGI_MIDDLE:
            return (
                <div>
                    <h4>Instituto Nacional de Estadística y Geografía</h4>
                    <div>
                    <img className="extraInfoImage" height="150" width="200" src="https://upload.wikimedia.org/wikipedia/commons/8/89/INEGI.png" alt="Logo"/>
                        <br/>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Autonomous Mexican goverment <a href="https://en.wikipedia.org/wiki/National_Institute_of_Statistics_and_Geography" target="_blank" rel="noreferrer">agency</a> , provides the country with statistical, economical and geographical information of relevance.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.JSF:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Java Server Faces using PrimeFaces and Hibernate for internal applications.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.INEGI_BOTTOM:
            return (
                <div>
                    <h4>Instituto Nacional de Estadística y Geografía</h4>
                    <div>
                    <img className="extraInfoImage" height="150" width="200" src="https://upload.wikimedia.org/wikipedia/commons/8/89/INEGI.png" alt="Logo"/>
                        <br/>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Autonomous Mexican goverment <a href="https://en.wikipedia.org/wiki/National_Institute_of_Statistics_and_Geography" target="_blank" rel="noreferrer">agency</a>, provides the country with statistical, economical and geographical information of relevance.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.VBA:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Implementing macros for Excel with Visual Basic for Applications to automate tasks.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.CSHARP_DEV:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Developed internal application for the assignment of tasks to employees.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.ENGLISH:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Listening understanding: 100%, Writing: 80%, Speaking: 60%.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.GRAPHIC_DESIGN:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Experience in personal projects and commissions.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.ADAPTABILITY:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Capable of learning things fairly quick and have resourcefulness to find solutions.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.WORK_ETHIC:
            return (
                <div>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Deep sense of responsability and commitment to deliver.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.JAVASCRIPT:
            return (
                <div>
                    <h4>JavaScript</h4>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Frequent usage.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.DELPHI:
            return (
                <div>
                    <h4>Delphi</h4>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Almost daily usage.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.JAVA:
            return (
                <div>
                    <h4>Java</h4>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Experience with previous work.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.GIT:
            return (
                <div>
                    <h4>Git</h4>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Almost daily usage.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.CSHARP:
            return (
                <div>
                    <h4>C#</h4>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Experience with previous work.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        case CUBE_AREAS.SQL:
            return (
                <div>
                    <h4>SQL</h4>
                    <div>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                .typeString('Somewhat frequent usage.')
                                .start()
                            }}
                        />
                    </div>   
                </div>
            );
        default:
            break;
    }
  return (
    <></>
  )
};
