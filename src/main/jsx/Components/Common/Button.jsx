import React from 'react';


export function StdButtonElement({ id, className, contentText, clickEvent }) {
    return <button type="button" className={"btn " + className} onClick={clickEvent}>{contentText}</button>
}