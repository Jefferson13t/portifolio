import styled from 'styled-components'

export const Container = styled.div`
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
        padding: 10px 5px;
    }

    @media(max-width: 900px) {
        
        > div {
            border-radius: 0;
            width: 100%;
            display:flex;
            flex-direction: column;
            justify-content: space-evenly;

        }
    }
    
`