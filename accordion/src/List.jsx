import questions from './data.js';
import Item from './Item';
import './List.css';
export default function List(){
    let items = questions.map(question=>(
        <Item key={question.id} {...question}/>
    ));
    return (
        <div className="Container">
        <p className="About">
            questions and answers about login
        </p>
        <div className="Items">
            {items}
        </div>
        </div>
    );
}