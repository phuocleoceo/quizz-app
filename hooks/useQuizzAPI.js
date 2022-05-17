import { SET_QUIZZ, SET_CURRENT_QUIZZ } from "../redux/slices/quizzSlice";
import { useDispatch, useSelector } from 'react-redux';
import { GET_QUIZZ } from "../api/apiQuizz";


export default function useQuizzAPI()
{
    const { listQuizz } = useSelector(state => state.quizz);
    const dispatch = useDispatch();

    const Load_Quizz_API = async () =>
    {
        try
        {
            const { data } = await GET_QUIZZ();
            dispatch(SET_QUIZZ({
                listQuizz: data,
                isLoading: false,
                exception: "",
                currentQuizz: data[0]
            }));
        }
        catch
        {
            console.log("Error occur when load api");
            dispatch(SET_QUIZZ({
                listQuizz: [],
                isLoading: true,
                exception: "Error occur when load api",
                currentQuizz: null
            }));
        }
    };

    const Set_Current_Quizz = async (index) =>
    {
        dispatch(SET_CURRENT_QUIZZ(listQuizz[index]));
    }

    return {
        Load_Quizz_API, Set_Current_Quizz
    };
}