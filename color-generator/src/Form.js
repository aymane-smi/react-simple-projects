import { useContext, useState } from "react";
import Values from "values.js";
import {colorContext} from "./context/color.context";
import './Form.css';

export default function Form(){
    const {color, setColor, list, setList, error, setError} = useContext(colorContext);
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        try{
            setError(false);
            setList(new Values(color).all(10));
        }catch(err){
            setError(true);
            setList([]);
        }
    };
    const handleChange = (evt)=>{
        setColor(evt.target.value);
    };
    return (<form onSubmit={handleSubmit}>
        <label htmlFor="color">color generator</label>
        <input type="text"
               id="color"
               name="color"
               value={color}
               onChange={handleChange}
               className={error ? "error": null}
        />
        <button>Submit</button>
    </form>);
}


// const Form = ()=>{
//  return <h1>Form</h1>
// }

// export default Form;
