import {useState} from 'react';
import './Card.css';
import {FaQuoteRight} from 'react-icons/fa';
export default function Card(props){
    const [state, setState] = useState(props.persons);
    const [counter, setCounter] = useState(0);
    const handleCounter = ()=>{
        setCounter(counter+1);
        console.log(counter);
    }
    const handleDeCounter = ()=>{
        setCounter(counter-1);
        console.log(counter);
    }
    let tmp = Math.abs(counter%3);
    return (
        <>
        <h2>Our Reviews</h2>
        <div className="underLine"></div>
        <div className="container">
            <div className="thumbnail">
                <div className="quote">
                    <FaQuoteRight />
                </div>
                <img src={state[tmp].image} alt={state[tmp].id}/>
            </div>
            <div className={"name"} style={{letterSpacing: "2.5px",
    fontWeight: "bold",
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "black"}}>{state[tmp].name}</div>
            <div className="job">{state[tmp].job}</div>
            <p>{state[tmp].text}</p>
            <div className="navigation">
                <i className="fas fa-chevron-left chevron" onClick={handleDeCounter}></i>
                <i className="fas fa-chevron-right chevron" onClick={handleCounter}></i>
            </div>
            <button onClick={handleCounter}>Surprise Me</button>
        </div>
        </>
    );
}