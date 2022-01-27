//style
import "./Tour.css";
function Tour(props){
    return (<div className="Tour">
        <img src={props.image} alt={props.id}/>
        <div className="container">
            <div className="header">
                <span className="name">{props.name}</span>
                <span class="price">$ {props.price}</span>
            </div>
        <p>{props.info}</p>
        <button onClick={()=>(props.removeTour(props.id))}>Not Interested</button>
        </div>
    </div>);
}
export default Tour;