import {Contacts} from './style'
import { data } from './../../../data'

export const Contatos = () => {
    
    const dados = data.contact.map(a=> {
        return <div key={a.perfil} >

            {a.logo}
            <a href={a.link || "#"} target="blank">{a.perfil}</a>
        </div>
    })
    
    return <Contacts>
        <h1>Contato</h1>
        <div>
        <p>{data.credits}</p> 
            <div>{dados}</div>
        </div>
    </Contacts>
}