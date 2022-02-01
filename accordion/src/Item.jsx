import useToggle from "./hooks/hooks.toggle";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import './Item.css';

export default function Item(props){
    const [ToggleState, Toggle] = useToggle();
    return (<div className="Item">
        <div className="header">
            <p className="title">{props.title}</p>
            <div className="toggler" onClick={Toggle}>
                {ToggleState ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </div>
        </div>
        {ToggleState ? <p className="info">{props.info}</p> : null}
    </div>);
}