import logo from './logo.svg';
import './App.css';
import { MenuProvider, MenuContext } from './context/menu.context';
import Menu from './Menu';
function App() {
  return (
    <div className="App">
      <MenuProvider>
        <Menu />
      </MenuProvider>
    </div>
  );
}

export default App;
