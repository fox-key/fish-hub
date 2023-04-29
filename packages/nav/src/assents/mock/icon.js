import {default as react} from "assents/icon/framework/react.png";
import {default as vue} from "assents/icon/framework/vue.png";
import {default as angular} from "assents/icon/framework/angular.png";
import {default as umi} from "assents/icon/framework/umi.png";
import {default as dva} from "assents/icon/framework/dva.png";
import {default as svelte} from "assents/icon/framework/svelte.png";
import {default as next} from "assents/icon/framework/next.png";
import {default as taro} from "assents/icon/framework/taro.png";

const _icons = {
    react: <Icon component={react}/>,
    vue: <Icon component={vue}/>,
    angular: <Icon component={angular}/>,
    umi: <Icon component={umi}/>,
    dva: <Icon component={dva}/>,
    svelte: <Icon component={svelte}/>,
    next: <Icon component={next}/>,
    taro: <Icon component={taro}/>,
}

function Icon({component}) {
    return (
        <img src={component} style={{width:'80px'}}/>
    )
}

export function getIcon(name) {
    return _icons[name]
}

