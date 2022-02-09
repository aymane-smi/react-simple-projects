import {useState, createContext} from 'react';
import Values from 'values.js';

export const colorContext = createContext();

export function ColorProvider(props){
    const [color, setColor] = useState("white");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("white").all(10));
    return (<colorContext.Provider value={{color, setColor, error, setError, list, setList}}>
        {props.children}
    </colorContext.Provider>);
};