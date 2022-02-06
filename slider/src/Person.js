import './Person.css';
export default function Person(props){
    const { sliderIndex, indexPosition, lastIndex} = props;
    let position = "nextSlide";
    if(sliderIndex === indexPosition)
        position = "activeSlide";
    if(indexPosition === sliderIndex -1 ||
        (sliderIndex === 0 && indexPosition === lastIndex))
        position = "prevSlide";
    const {id, quote, title, name, image} = props;
    return (<div key={id} className={`Person ${position}`}>
    <img src={image} alt={id}/>
    <p className="title">{title}</p>
    <p className="name">{name}</p>
    <p className="quote">{quote}</p>
</div>);
}