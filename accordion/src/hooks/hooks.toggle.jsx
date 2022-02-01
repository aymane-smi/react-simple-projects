import {useState} from 'react';

export default function useToggle(IntialVal=false){
    const [ToggleState, setState] = useState(IntialVal);
    const Toggle = ()=>{
        setState(!ToggleState);
    }
    return [ToggleState, Toggle];
} 