import {default as react} from "assents/icon/framework/react.png";
import {default as vue} from "assents/icon/framework/vue.png";
import {default as angular} from "assents/icon/framework/angular.png";
import {default as umi} from "assents/icon/framework/umi.png";
import {default as dva} from "assents/icon/framework/dva.png";
import {default as svelte} from "assents/icon/framework/svelte.png";
import {default as next} from "assents/icon/framework/next.png";
import {default as taro} from "assents/icon/framework/taro.png";
import {default as nuxt} from "assents/icon/framework/nuxt.png";
import {default as electron} from "assents/icon/framework/electron.png";
import {default as react_native} from "assents/icon/framework/react_native.png";
import {default as flutter} from "assents/icon/framework/flutter.png";
import {default as weex} from "assents/icon/framework/weex.png";
import {default as qq} from "assents/icon/framework/qq.png";
//design
import {default as element} from "assents/icon/design/element.png";
import {default as elemntPlus} from "assents/icon/design/elemntPlus.png";
import {default as antd_vue} from "assents/icon/design/antd_vue.png";
import {default as ahooks} from "assents/icon/design/ahooks.png";
import {default as react_router} from "assents/icon/design/react_outer.png";
import {default as create_react_app} from "assents/icon/design/crate_react_app.png";
//library
import {default as bootcdn} from "assents/icon/design/bootcdn.png";
import {default as mdn} from "assents/icon/design/mdn.png";

const _icons = {
    react: <Icon component={react}/>,
    vue: <Icon component={vue}/>,
    angular: <Icon component={angular}/>,
    umi: <Icon component={umi}/>,
    dva: <Icon component={dva}/>,
    svelte: <Icon component={svelte}/>,
    next: <Icon component={next}/>,
    taro: <Icon component={taro}/>,
    nuxt: <Icon component={nuxt}/>,
    electron: <Icon component={electron}/>,
    react_native: <Icon component={react_native}/>,
    flutter: <Icon component={flutter}/>,
    weex: <Icon component={weex}/>,
    qq: <Icon component={qq}/>,
    //design
    element: <Icon component={element}/>,
    element_plus: <Icon component={elemntPlus}/>,
    antd_vue: <Icon component={antd_vue}/>,
    ahooks: <Icon component={ahooks}/>,
    react_router: <Icon component={react_router}/>,
    create_react_app: <Icon component={create_react_app}/>,
    //library
    bootcdn: <Icon component={bootcdn}/>,
    mdn: <Icon component={mdn}/>,
}

function Icon({component}) {
    return (
        <img src={component} style={{width:'80px'}}/>
    )
}

export function getIcon(name) {
    return _icons[name]
}

