import logo from './logo.svg';
import './App.css';
import people from './data';
import Slider from './Slider';
import {BsSlashLg} from 'react-icons/bs';
import './container.css';
function App() {
  return (
    <div className="App">
      <div className="review">
        <BsSlashLg  className="slash"/>
        Reviews
        </div>
      <Slider people={people}/>
    </div>
  );
}

export default App;
