import React from "react";
import { skills } from '../../../../data' 
import { Habilidades } from "./style";

export const Habilidade = (props: {skills: Array<skills>}) => {
    const habList = props.skills.map((a)=> {
        return <Habilidades key={a.habName}>
            <div>{a.logo}</div>
            <p>{a.habName}</p>
            <div style={{width: '60px', height: '10px', backgroundColor: 'black', borderRadius: '20px'}}>
            <div style={{width: `${a.habLevel}%`}}></div>
            </div>
            </Habilidades>
    })

    return (
        <div>
            {habList}
        </div>   
    )
}