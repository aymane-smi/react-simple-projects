import axios from 'axios';
import {useEffect, useState} from 'react';
import Tab from './Tabs';
import './Main.css';
const API_URL = "https://course-api.com/react-tabs-project";

export default function Main(){
    const [tabs, setTabs] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const fetchTab = async()=>{
        setLoading(true);
        let response = await axios.get(API_URL);
        setTabs(response.data);
        setLoading(false);
    }
    useEffect(fetchTab, []);
    if(loading){
        return <div className="Loading">Loading...</div>
    }else{
       return ( <div>
        <span className="Experience">experience</span>
        <div className="UnderLine"></div>
        <div className="Container">
            <div className="Menu">
                {tabs.map((tab, i)=>(
                <span key={i} className={`Selector ${i == index ? "activated": ""}`} onClick={()=>{setIndex(i)}}>
                    {tab.company}
                </span>
                ))}
            </div>
            <Tab {...tabs[index]} key={index}/>
        </div>
    </div>)
    }
} 