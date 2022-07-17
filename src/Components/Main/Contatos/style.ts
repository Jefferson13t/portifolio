import styled from 'styled-components'

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        display: flex;
        flex-wrap: wrap;
        font-size: 16pt;
        justify-content: space-between;
        align-items: center;        
        flex-grow: 1;
        
        > div {
            margin: 10px;
            > div {
            font-size: 18pt;
            align-items: center;
            
            > a {
                margin: 5px 15px;

                &:hover {
                    color: rgba(0,0,0,.8)
                }
            }
            }
        }
    }
`
