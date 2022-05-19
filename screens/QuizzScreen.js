import React, { useEffect, useState } from 'react';
import AnswerCount from "../components/AnswerCount";
import DashedLine from 'react-native-dashed-line';
import AnswerBox from "../components/AnswerBox";
import { StyleSheet, View } from 'react-native';
import NextQuizz from "../components/NextQuizz";
import useQuizzAPI from "../hooks/useQuizzAPI"
import Question from "../components/Question";
import Loading from "../components/Loading";
import { useSelector } from 'react-redux';

export default function QuizzScreen()
{
    const { listQuizz, isLoading, currentQuizz } = useSelector(state => state.quizz);
    const { Load_Quizz_API, Set_Current_Quizz } = useQuizzAPI();
    // Index của câu hỏi hiện tại trong bộ câu hỏi
    const [quizzIndex, setQuizzIndex] = useState(0);
    // Index của câu trả lời được chọn
    const [quizzChoosen, setQuizzChoosen] = useState(-1);
    // Mỗi câu hỏi chỉ được chọn đáp án 1 lần
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() =>
    {
        const load_quizz = async () =>
        {
            await Load_Quizz_API();
        };
        load_quizz();
    }, []);

    const handleNextQuizz = async () =>
    {
        // Chuyển câu
        await Set_Current_Quizz(quizzIndex + 1);
        // Set lại index của câu hiện tại trong listQuizz
        setQuizzIndex(quizzIndex => quizzIndex + 1);
        // Reset index của câu trả lời được chọn
        setQuizzChoosen(-1);
        // Set lại là chưa chọn câu trả lời cho câu hỏi tiếp theo
        setIsPressed(false);
    };

    const handleChoosen = (index) =>
    {
        setQuizzChoosen(index);
        setIsPressed(true);
    };

    return (
        <View style={styles.container}>
            {
                !isLoading ?
                    <View style={styles.quizzApp}>
                        <View style={styles.answerCount}>
                            <AnswerCount listQuizz={listQuizz} quizzIndex={quizzIndex} />
                            <DashedLine dashLength={5} dashColor="#667186" />
                        </View>

                        <View style={styles.question}>
                            <Question currentQuizz={currentQuizz} />
                        </View>

                        <View style={styles.answer}>
                            {
                                currentQuizz.choices.map((answer, index) => (
                                    <AnswerBox key={index} answer={answer} quizzChoosen={quizzChoosen}
                                        index={index} onChoosen={handleChoosen}
                                        isPressed={isPressed} trueAnswer={currentQuizz.answer} />

                                ))
                            }
                            <NextQuizz onNextQuizz={handleNextQuizz} />
                        </View>
                    </View> :
                    <View style={styles.loadingIndicator}>
                        <Loading />
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2a354b",
        padding: 25
    },
    quizzApp: {
        flex: 1
    },
    answerCount: {
        flex: 1,
        top: 20,
        left: 10,
        marginBottom: 15
    },
    question: {
        flex: 1,
        left: 10
    },
    answer: {
        flex: 6
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});