import logo from './logo.svg';
import './App.css';
import Form from './Form';
import {ColorProvider} from './context/color.context';
import Palette from './Palette';
function App() {
  return (
    <div className="App">
      <ColorProvider>
        <Form />
        <Palette />
      </ColorProvider>
    </div>
  );
}

export default App;
