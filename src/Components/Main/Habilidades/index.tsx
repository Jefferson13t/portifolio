import { ContainerHab } from "./style";
import { Habilidade } from "./Habilidade";
import { data } from '../../../data'

export  const Habilidades = ( ) => {
    return (
        <ContainerHab> 
            <h1>Habilidades</h1>
            <Habilidade skills={data.skills}/>
        </ContainerHab>
    )
    }