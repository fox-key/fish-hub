import {Outlet} from "react-router-dom";
import Styles from 'theme.module.less'
import Header from 'components/Header'
import Menu from "components/Menu";
import {resizeListener} from "@component/utils";
import {useEffect} from "react";
import {configResponsive,useResponsive} from "ahooks";
import {userContext} from "./userContext";
import {useToggleTheme} from "./hooks";

configResponsive({
    small: 0,
    middle: 800,
    large: 1200,
});

export default function Bootstrap() {
    const {color} = useToggleTheme();

    useEffect(() => {
        window.addEventListener('resize', resizeListener);
        resizeListener();
    }, [])

    return <userContext.Provider value={{
        screen:useResponsive(),
        theme:color
    }}>
        <div className={Styles.bootstrap}>
            <Header/>
            <Menu/>
            <div className={Styles.main} style={{backgroundColor:color}}>
                <Outlet/>
            </div>
            <div className={Styles.categrate} style={{backgroundColor:color}}></div>
        </div>
    </userContext.Provider>

}
