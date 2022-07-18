import {Contacts} from './style'
import { data } from './../../../data'

export const Contatos = () => {
    
    const contatos = data.contact.map(a=> {
        return <div key={a.perfil} >

            {a.logo}
            <a href={a.link || "#"} target="blank">{a.perfil}</a>
        </div>
    })
    
    return <Contacts>
        <h1>Contato</h1>
        <div>
            <div>
                <p>{data.credits}</p>
            </div> 
            <div>
                {contatos}
            </div>
        </div>
    </Contacts>
}