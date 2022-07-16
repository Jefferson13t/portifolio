import styled from 'styled-components'


export const Habilidades = styled.div`
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    font-size: 16pt;
    > div {
        overflow: hidden;
        margin: 0 15px;
        
        > div {
        height: 100%;
        background-color: green;
        transform: skew(20deg);
    }
}

`