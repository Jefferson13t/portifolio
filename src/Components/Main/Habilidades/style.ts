import styled from 'styled-components'

export const ContainerHab = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center; 
    
    > div {
    height: 80%;
    width: 80%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 5px;
    background-color: var(--primary)
    }
    ::-webkit-scrollbar-thumb {
        background-color: white;
    }
    
}


    `