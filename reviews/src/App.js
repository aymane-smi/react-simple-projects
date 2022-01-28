import logo from './logo.svg';
import './App.css';
import reviews from './data';
import Card from './Card';
function App() {
  return (
    <div className="App">
      <Card persons={reviews}/>
    </div>
  );
}

export default App;
