import styled from 'styled-components'

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

> div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap:wrap;
        flex-grow: 1;
        > div {
            max-width: 700px;
            margin: 20px;
            > div {
                display: flex;
                align-items: center; 
            > a {
                margin: 10px;
                transition: .5s;

                &:hover{
                color: rgba(0,0,0,.6)
                }
            }
        }
    }
}
`
