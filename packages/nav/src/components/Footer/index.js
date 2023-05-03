import {useToggleTheme} from "hooks";

export default function (){
    const {background, color} = useToggleTheme();
    return (
        <footer style={{
            height:'40vh',
            backgroundColor:background,
            color
        }} className='flex justify-center items-center flex-col'>
            <p>Fish Hub written</p>
            <p>&copy;2023</p>
            <p>response: https://gitee.com/fox-key/fish-hub.git </p>
        </footer>
    )
}