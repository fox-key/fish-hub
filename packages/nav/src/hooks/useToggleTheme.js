import {useDispatch, useSelector} from "react-redux";
import {dark, white} from "selices/sliceThemer";
import {setStorage} from "@component/utils";

export function useToggleTheme() {
    const theme = useSelector(state => state.theme.value);
    const dispatch = useDispatch();

    function toggle() {
        if (theme === 'white') {
            dispatch(dark());
            setStorage({theme: 'black'})
        } else {
            dispatch(white());
            setStorage({theme: 'white'})
        }
    }

    return {
        color: theme == 'white' ? 'black' : 'white',
        background: theme,
        toggle
    }
}