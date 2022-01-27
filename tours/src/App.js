//components
import logo from './logo.svg';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Tours from './Tours';
//styles
import './App.css';
//constants
const API_URL = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [Loading, setLoading] = useState(false);
  const removeTour = (id)=>{
    const updatedTours = tours.filter((tour)=>(tour.id !== id));
    console.log(updatedTours);
    setTours(updatedTours);
  };
  const fetchApi = async()=>{
    setLoading(true);
    try{
      const response = await axios.get(API_URL);
      setLoading(false);
      setTours(response.data);
      console.log(response.data);
    }catch(err){
      console.log(err);
      console.log("cannot get data from the api");
    }
  };
  useEffect(()=>{
    fetchApi();
  }, []);
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
