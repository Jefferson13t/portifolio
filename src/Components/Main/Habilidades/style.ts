import styled from 'styled-components'

export const ContainerHab = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center; 
    
    > div {
    height: 80%;
    width: 55%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    overflow-y: scroll;
    overflow-x: hidden;
    
    ::-webkit-scrollbar {
    width: 5px;
    background-color: white;
    
}
::-webkit-scrollbar-thumb {
        background: linear-gradient(-10deg, rgba(2,0,36,1) 0%, rgba(9,121,93,1) 59%, rgba(0,212,255,1) 100%);
        border-radius: 20px;
    }
    
    
}


    `