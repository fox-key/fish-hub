import React, {memo} from "react";
import {HashRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";

import router from "../../router";

import AppHeader from "../../components/app-header";
import AppFooter from "../../components/app-footer";
// import AppPlayBar from "../player/app-play-bar";

export default memo(function aa(){
    return(
       <HashRouter>
           <AppHeader/>
           {renderRoutes(router)}
           <AppFooter/>
           {/*<AppPlayBar/>*/}
       </HashRouter>
    )
})
