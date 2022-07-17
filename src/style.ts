import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction:column;
  
    > div {
        scroll-snap-align: start;
        width: 80vw;
        height:100vh;
        background-color: var(--primary);
        color: var(--primaryColor);
        border-radius: 20px;
        padding: 10px 5px;
        overflow: hidden;
    }

    @media(max-width: 900px) {
        
        > div {
            border-radius: 0;
            width: 100%;
            display:flex;
            flex-direction: column;

        }
    }
    
`