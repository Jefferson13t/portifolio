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
    font-size: 16pt;
    background: linear-gradient(-10deg, rgba(2,0,36,1) 0%, rgba(9,121,93,1) 59%, rgba(0,212,255,1) 100%);


    scroll-snap-type: y mandatory;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    width: 5px;
    background-color: white;
    
}
::-webkit-scrollbar-thumb {
        background: linear-gradient(-10deg, var(--grad1) 0%, var(--grad2) 59%, var(--grad3) 100%);
        border-radius: 20px;
    }

    }

a {
    color: black;
    text-decoration: none;
}

*, button, input  {
    border:0;
    background-color:none;
    outline: none;
}

ul {
    list-style:none;
}

:root{
    --primary: white;
    --grad1: rgba(2,0,36,1);
    --grad2: rgba(9,121,93,1);
    --grad3: rgba(0,212,255,1);
}

`

