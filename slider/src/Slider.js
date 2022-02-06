import {useState, useEffect} from 'react';
import './slider.css';
import Person from './Person';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
export default function People(props){
    const [index, setIndex] = useState(0);
    const {people}  = props;


    //moving forward
    const nextSlide = ()=>{
        setIndex((oldIndex)=>{
            let index = oldIndex + 1;
            if(index > people.length-1)
                index = 0;
            return index;
        });
    };



    //moving backward
    const prevSlide = ()=>{
        setIndex((oldIndex)=>{
            let index = oldIndex-1;
            if(index < 0)
                index = people.length-1;
            return index;
        });
    };



    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex((oldIndex)=>{
                let index = oldIndex + 1;
                if(index > people.length-1)
                    index = 0;
                return index;
            });
        }, 2000);
        return ()=>{
            clearInterval(slider);
        }
    }, [index]);


    //creatoing persn component using people
    let person = people.map((person, personIndex)=>(
        <Person {...person} indexPosition={personIndex} sliderIndex={index} lastIndex={people.length-1}/>
    ));
    return (<div className="Slider">
        <FaChevronLeft className="btn left" onClick={nextSlide}/>
        {person}
        <FaChevronRight className="btn right" onClick={prevSlide}/>
    </div>);
}

