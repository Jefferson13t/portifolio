import React from "react";
import { skills } from '../../../../data' 


export const Habilidade = (props: {skills: Array<skills>}) => {
    const habList = props.skills.map((a)=> {
        return <div key={a.habName}>
            <p>{a.habName}</p>
            <span>{a.habLevel}</span>
            <img src={a.logoPath} alt={`logo do ${a.habName}`}></img>
            </div>
    })

    return (
        <div>
            {habList}
        </div>   
    )
}