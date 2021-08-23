import {useDispatch} from "react-redux";
import {setError, setFilms} from "../actionCreators";


const useSetFilms = () => {
    const dispatch = useDispatch();

    return (payload) => dispatch(setFilms(payload));
}
const useSetError = () => {
    const dispatch = useDispatch();

    return (payload) => dispatch(setError(payload));
}


export {
    useSetFilms,
    useSetError
}
