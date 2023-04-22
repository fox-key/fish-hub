
import {useToggleTheme} from "hooks/index";
import { useToggle } from 'ahooks';
import {useEffect} from "react";

export default function (props:any){
    const {color} = useToggleTheme();
    const [state, { set}] = useToggle('white', 'black');

    useEffect(()=>{
       if(color=='white') set('black');
       if(color=='black') set('white');
    },[color])

    const style = {
        color:state,
        backgroundColor:color
    }
    return <div style={style}>{props.children}</div>
}