import styled from 'styled-components'

export const Container = styled.div`
    background: linear-gradient(-10deg, rgba(2,0,36,1) 0%, rgba(9,121,93,1) 59%, rgba(0,212,255,1) 100%)
    ;
    width: 100vw;
    flex-direction:column;
    align-items: center;
    display: flex;
  
    
    
    > div {
        scroll-snap-align: start;
        width: 80vw;
        height:100vh;
        background-color: var(--primary);
        color: var(--primaryColor);
        border-radius: 20px;
    }
    
`