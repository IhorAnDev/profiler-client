import {useSelector} from "react-redux";

const MainPage = () => {

    const token = useSelector(state => state.register.token);
    return (
        <div>
            <h1>Main Page</h1>
            {token}
        </div>
    );
}


export default MainPage;
