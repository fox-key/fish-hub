import {Outlet} from "react-router-dom";
import Header from 'components/Header'
import Menu from "components/Menu";
import {FloatButton} from 'antd';
import {ArrowUpOutlined} from '@ant-design/icons';
import {configResponsive, useResponsive} from "ahooks";
import {userContext} from "./userContext";
import {useToggleTheme} from "./hooks";
import Footer from "components/Footer";
import {getStorage} from "@component/utils";

configResponsive({
    small: 400,
    middle: 800,
    large: 1200,
});

export default function Bootstrap() {
    const {background, color} = useToggleTheme();

    const {middle} = useResponsive()

    if(getStorage('theme')){
        document.documentElement.style.backgroundColor = getStorage('theme');
    }

    // useEffect(() => {
    //     window.addEventListener('resize', resizeListener);
    //     resizeListener();
    // }, [])

    return <userContext.Provider value={{
        screen: useResponsive(),
        theme: background
    }}>
        <div className={'bootstrap'} >
            <Header/>
            <Menu/>
            <div className={'main'}>
                <Outlet/>
            </div>
            <Footer/>

            <FloatButton.BackTop
                shape="circle"
                type="primary"
                style={{
                    right: middle?94:14,
                }}
                icon={<ArrowUpOutlined/>}
            />
        </div>
    </userContext.Provider>

}
