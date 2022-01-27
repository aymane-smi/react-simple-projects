//Compnents
import {useState} from 'react';
import data from './data';
import Person from './Person';
//style
import './Card.css';

function Card(){
    const [state, setState] = useState(data);
    const people = state.map((person)=>(
         <Person {...person} key={person.id}/>
    ));
    const handleClick = ()=>{
        setState([]);
    };
    return(<div className="Card">
            <h2>{state.length} birthdays today</h2>
            {people}
            <button onClick={handleClick}>Clear All</button>
        </div>);
}
export default Card;