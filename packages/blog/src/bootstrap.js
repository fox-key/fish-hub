import {Outlet} from "react-router-dom";
import Styles from 'bootstrap.module.less'
import Header from 'components/Header'
import Menu from "components/Menu";

import {resizeListener} from "@component/utils";
import {useEffect} from "react";

export default function Bootstrap() {

    useEffect(() => {
        window.addEventListener('resize', resizeListener);
        resizeListener();
    }, [])

    return <div className={Styles.bootstrap}>
        <Header/>
        <Menu/>
        {/*<div className={Styles.main}>*/}
        {/*    <Outlet/>*/}
        {/*</div>*/}
        {/*<div className={Styles.categrate}></div>*/}
    </div>
}
