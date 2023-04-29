import {useDispatch, useSelector} from "react-redux";
import {dark,white} from "selices/sliceThemer";

export  function useToggleTheme(){
    const theme = useSelector(state => state.theme.value);
    const dispatch = useDispatch();

    function toggle(){
        if(theme==='white'){
            dispatch(dark());
            document.documentElement.style.backgroundColor = '#999';
        }else{
            dispatch(white());
            document.documentElement.style.backgroundColor = '#fff';
        }
    }

    return{
        color:theme=='white'?'black':'white',
        background:theme,
        toggle
    }
}