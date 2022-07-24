import styled from 'styled-components'

export const Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Container = styled.div`
    height: 80%;
    width: 90%;
    flex-grow: 1;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 100px;
    box-shadow: black 5px 5px 10px;

    #left-arrow, #right-arrow {
        cursor:pointer;
        color: var(--primary);
        font-size: 50pt;
        height: 100%;   
        flex-grow: 1;        
        background: linear-gradient(-10deg, var(--grad3)  0%, var(--grad2) 59%, var(--grad1) 100%);
        transition: .3s;
        &:hover {
            opacity: .9;
        }
    }

   
    
    @media(max-width: 900px) {
        align-items: center;
        box-shadow:none;
        #left-arrow, #right-arrow { 
            display: none;
        }
        > div {
            height: 50%;
            width: 100%;
            border-radius: 20px;
            box-shadow: black 5px 5px 10px; 
        }
    }

`
export const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    overflow: hidden;   
    display: flex;
    box-shadow: black 5px 5px 10px;
    
    ::-webkit-scrollbar {
        display: none;
    }

    
`

export const Card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: space-around;


    > h1 {
        align-self: center;
        font-size: 1.5em;
        
    }
    > p {
        font-size: 16pt;
    }
    
    > a > img {
        width: 100%;
        transition: .3s;
        &:hover {
            opacity: .9;
        }
    }

`