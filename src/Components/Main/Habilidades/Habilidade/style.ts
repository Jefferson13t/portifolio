import styled from 'styled-components'


export const Habilidades = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    font-size: 16pt;
    width: 100%;
    border-radius: 50px;
    height: 35px;
    cursor: pointer;
    transition: 0.5s;
    max-width: 280px;
    
    &:hover {
        background-color: rgba(0,0,0,.2);
    }

    > div {
        overflow: hidden;
        margin: 0 15px;
        
        
        > div {
        height: 100%;
        background-color: var(--secundary);
        transform: skew(20deg);
    }
}

`