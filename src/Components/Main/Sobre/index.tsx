import { data } from "./../../../data";
import { About } from "./style";

export const Sobre = () => {

    const resumeText = data.about.resume.map(a=> {
        return <p key={a} >{a}</p>
    })
    return <About>
        <img src={data.about.img} alt="imagem de perfil"></img>
        <div>{resumeText}</div>
    </About>
}