import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
 }
 
 html {
    display: flex;
    justify-content:center;
    font-family: 'Times New Roman', Times, serif;

        scroll-snap-type: y mandatory;
        overflow-y: scroll;

    }



*, button, input {
    border:0;
    background-color:none;
    outline: none;
}

ul {
    list-style:none;
}

:root{
    --primary: #023D21;
    --secundary: blue;
    --primaryColor: white;
}

`

