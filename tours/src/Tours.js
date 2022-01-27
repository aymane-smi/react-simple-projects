//style
import './Tours.css';
import Tour from './Tour';
function Tours(props){
    console.log(props);
    const tours = props.tours.map((tour)=>(
        <Tour {...tour} key={tour.id} removeTour={props.removeTour}/>
    ));
    return (<div>
        <h2>Our Tour</h2>
        <div className="underLine"></div>
        {tours}
    </div>);
}
export default Tours;