import React from "react";
import { Link } from "./style";

interface listItem {
    content: String,
}

export const ListItem= (props: listItem) => {
    return(
        <Link onClick={() => window.alert('redirecionado')}>
        <h2>{props.content.toLocaleUpperCase()}</h2>
        </Link>
    )
}