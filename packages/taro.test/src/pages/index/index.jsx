import { Component } from "react";
import {
  Button,
  Cell,
} from "@nutui/nutui-react-taro";
import './index.scss'

class Index extends Component {
   constructor(props) {
     super(props);
   }

   componentDidMount() {}

   componentWillUnmount() {}

   componentDidShow() {}

   componentDidHide() {}

   render() {
     return (
       <div className="nutui-react-demo">
         <div className="index">
         hello taro !
         </div>
       </div>
     );
   }
}
export default Index
