import {useContext, memo} from 'react';
import {MenuContext} from './context/menu.context'; 
import './Nav.css';


export default memo(function Nav(){
    const {state, setState} = useContext(MenuContext);
    return (
        <div className='Nav'>
            <span onClick={()=>(setState("all"))}>All</span>
            <span onClick={()=>(setState("breakfast"))}>Breakfast</span>
            <span onClick={()=>(setState("lunch"))}>Lunch</span>
            <span onClick={()=>(setState("shakes"))}>Shakes</span>
        </div>
    );
})