import styled from 'styled-components'

export const ContainerHab = styled.div`
    border-radius: 20px;
    padding: 3px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--primary);
    color: white;
    overflow: hidden;
    
    > div {
        width: 45%;
        display: grid;
        grid-template-columns: 50% 2fr;
        grid-gap: 5px 30px;
    }
`