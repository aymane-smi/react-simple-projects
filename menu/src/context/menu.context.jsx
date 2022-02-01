import { createContext, useState} from "react";

export const MenuContext = createContext();

export function MenuProvider(props){
    const [state, setState] = useState("all");
    return (<MenuContext.Provider value={{state, setState}}>
        {props.children}
    </MenuContext.Provider>);
}