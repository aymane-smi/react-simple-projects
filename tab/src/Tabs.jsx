import {FaAngleDoubleRight} from 'react-icons/fa';
import './Tab.css';
export default function Tab(props){
    const {duties} = props;
    return (<div className="Tab">
        <div className="Title">
            {props.title}
        </div>
        <div className="Company">
            {props.company}
        </div>
        <div className="Dates">
            {props.dates}
        </div>
        <div className="Duties">
            {duties && duties.map((duty)=>(
                <div className="double-container">
                    <FaAngleDoubleRight className="double"/>
                    <p>
                        {duty}
                    </p>
                </div>
            ))}
        </div>
    </div>);
}