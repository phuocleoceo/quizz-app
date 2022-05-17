import { SET_DATA, SET_LOADING, SET_EXCEPTION, SET_QUIZZ } from "../redux/slices/quizzSlice";
import apiQuizz from "../api/apiQuizz";
import { useDispatch } from 'react-redux';


export default function useQuizzAPI()
{
    const dispatch = useDispatch();

    const Load_Quizz_API = async () =>
    {
        try
        {

        }
        catch
        {

        }
    };

    return {
        Load_Quizz_API
    };
}