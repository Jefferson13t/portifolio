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
    transition: 0.4s;
    max-width: 280px;
    
    &:hover {
        box-shadow: black 5px 5px 10px;

    }

    > div {
        overflow: hidden;
        margin: 0 15px;
        
        
        > div {
        height: 100%;
        background-color: var(--grad3);
        transform: skew(20deg);
    }
}

`