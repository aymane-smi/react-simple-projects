import {useContext} from 'react';
import { MenuProvider, MenuContext } from './context/menu.context';
import Nav from './nav';
import menu from './data';
import Item from './Item';
import './Menu.css';


export default function Menu(){
    const {state}  = useContext(MenuContext);
    const menus = menu.map((menu, i)=>{
        if(state === "all"){
            return  (<Item key={menu.id} {...menu} order={i}/>);
        }
        else if(state === menu.category){
            return   (<Item key={menu.id} {...menu} order={i}/>);
        }
    });
    return (<>
        <h1>Our Menu</h1>
        <div className="underLine"></div>
        <Nav />
        <div className="Menu">
            {menus}
        </div>
    </>)
}