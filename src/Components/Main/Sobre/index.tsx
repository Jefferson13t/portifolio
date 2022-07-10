import React from "react";
import { data } from "../../../data";
import { About } from "./style";

export const Sobre = () => {
    return <About>
        <p>{data.about.resume}</p>
        <img src={data.about.img} alt="imagem de perfil"></img>
    </About>
}