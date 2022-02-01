import './Item.css';

export default function Item(props){
    return (<div className="Item">
        <img src={props.img} alt={props.id}/>
        <div className="info">
            <div className="header">
                <span className="title">
                    {props.title}
                </span>
                <span className="price">
                    ${props.price}
                </span>
            </div>
            <p className="description">
                {props.desc}
            </p>
        </div>
    </div>);
}