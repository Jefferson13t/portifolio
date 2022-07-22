import styled from 'styled-components'

export const Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Container = styled.div`
    width: 90%;
    border: solid 1px;
    flex-grow: 1;
    margin: 20px;
    display: flex;
    justify-content: space-between;

    #left-arrow, #right-arrow {
        display: flex;
        align-items: center;
        color: red;
        font-size: 50pt;
        height: 100%;

        &:hover {

            background-color: red;
        }
        
    }
    
    @media(max-width: 900px) {
        
        #left-arrow, #right-arrow { 
            display: none;
        }
        > div {
            width: 100%;
        }
    }

`
export const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    border: solid 1px red;
    overflow-x: auto;   
    display: flex;
    flex-flow: row nowrap;
    scroll-snap-type: x mandatory;
    
    ::-webkit-scrollbar {
        display: none;
    }

    
`

export const Card = styled.div`
scroll-snap-align: start;
    width: 100%;
    flex-shrink: 0;
    height: 100%; 
    background-color: lightgray;

`