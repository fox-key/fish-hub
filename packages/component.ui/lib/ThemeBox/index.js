import { jsx as _jsx } from "react/jsx-runtime";
import { useToggleTheme } from "hooks/index";
import { useToggle } from 'ahooks';
import { useEffect } from "react";
export default function (props) {
    const { color } = useToggleTheme();
    const [state, { set }] = useToggle('white', 'black');
    useEffect(() => {
        if (color == 'white')
            set('black');
        if (color == 'black')
            set('white');
    }, [color]);
    const style = {
        color: state,
        backgroundColor: color
    };
    return _jsx("div", Object.assign({ style: style }, { children: props.children }));
}
