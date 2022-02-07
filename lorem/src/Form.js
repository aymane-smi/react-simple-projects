import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './Form.css';
// import Display from './Display';
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare iaculis rhoncus. Vestibulum efficitur vulputate suscipit. Morbi porttitor hendrerit lacus ut commodo. Aliquam ac magna suscipit, facilisis velit id, varius ipsum. Maecenas bibendum elit tincidunt, porttitor turpis sed, placerat massa. Phasellus commodo ornare ex vitae ultrices. Integer eu lacus nec mauris venenatis mollis. Duis non ipsum vitae ipsum auctor iaculis sed et libero.\n";
export default function Form(){
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState([]);
    const handleChange = (evt)=>{
        if(evt.target.value < 0)
            setNumber(0);
        else
            setNumber(evt.target.value);
        // console.log(number);
        // setResult((oldResult)=>{
        //     return oldResult.push(lorem);
        // });
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        if(number === 0)
            setResult([]);
        else{
            let tmp = lorem.repeat(number);
            setResult(tmp.split('\n'));
        }
    };
    let result_ = result.map((text)=>(<p key={uuid()}>{text}</p>));
    return (<div className="container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="paragraph">Paragraph:</label>
            <input type="number"
                value={number}
                id="paragraph"
                name="number"
                onChange={handleChange}
            />
            <button>generate</button>
        </form>
        {result_}
    </div>);
}