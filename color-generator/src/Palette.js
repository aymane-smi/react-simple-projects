import {useEffect, useContext, useState} from 'react';
import { colorContext } from './context/color.context';
import './Palette.css';
import rgbToHex from './utils';
export default function Plette(){
    const [Alert, setAlert] = useState([false, 0]);
    const {color, list} = useContext(colorContext);
    useEffect(()=>{
        let interval = setInterval(()=>{
            setAlert([false, 0]);
        }, 1500);
        return ()=>clearInterval(interval);
    }, [Alert]);
    return (<div className="container">
        {list.map((color, index)=>(
            <div key={index}
                 style={{
                     backgroundColor: `rgb(${color.rgb.join(',')})`
                 }
                }
                className={`color ${index > 12 && "color-light"}`}
                onClick={()=>{
                    navigator.clipboard.writeText("hexValue");
                    setAlert([true, index]);
                }}
            >
                <p>{rgbToHex(...color.rgb)}</p>
                <p>{`${color.weight}%`}</p>
                {(Alert[0] && Alert[1] === index) ? <p>copied to clipboard</p> : null}
            </div>
        ))}
    </div>);
}