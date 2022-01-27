import React from 'react';
//style
import './Person.css';
function Person(props){
    return(<div className="container">
        <img src={props.image} alt={props.id}/>
        <div className="Person-info">
            <span className="Person-name">{props.name}</span>
            <span className="Person-age">{props.age} years</span>
        </div>
    </div>);
}
export default Person;