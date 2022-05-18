import React, { useEffect, useState } from 'react';
import AnswerCount from "../components/AnswerCount";
import DashedLine from 'react-native-dashed-line';
import AnswerBox from "../components/AnswerBox";
import { StyleSheet, View } from 'react-native';
import useQuizzAPI from "../hooks/useQuizzAPI"
import Question from "../components/Question";
import { useSelector } from 'react-redux';

export default function QuizzScreen()
{
    const { listQuizz, isLoading, currentQuizz } = useSelector(state => state.quizz);
    const { Load_Quizz_API, Set_Current_Quizz } = useQuizzAPI();
    const [quizzIndex, setQuizzIndex] = useState(0);

    useEffect(() =>
    {
        const load_quizz = async () =>
        {
            await Load_Quizz_API();
        };
        load_quizz();
    }, []);

    return (
        <View style={styles.container}>
            {
                !isLoading &&
                <View style={styles.quizzApp}>
                    <View style={styles.answerCount}>
                        <AnswerCount listQuizz={listQuizz} quizzIndex={quizzIndex} />
                    </View>

                    <View style={styles.dottedLine}>
                        <DashedLine dashLength={5} dashColor="#667186" />
                    </View>

                    <View style={styles.question}>
                        <Question currentQuizz={currentQuizz} />
                    </View>

                    <View style={styles.answer}>
                        {
                            currentQuizz.choices.map(answer => (
                                <AnswerBox answer={answer} />
                            ))
                        }
                    </View>
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
        left: 10
    },
    dottedLine: {
        flex: 1,
        alignSelf: "center"
    },
    question: {
        flex: 1,
        left: 10
    },
    answer: {
        flex: 6
    },
});