import React from 'react'
import { HeaderContainer } from './styles'
import { ListItem } from './Links'

const Header: React.FC = () => {
    return (
        <HeaderContainer> 
        <ListItem content="Portifólio" />
            <ul>
        <ListItem content="Resumo" />
        <ListItem content="Habilidades" />
        <ListItem content="Projetos" />
        <ListItem content="Contato" />
            </ul>
        </HeaderContainer>
    )
}

export default Header