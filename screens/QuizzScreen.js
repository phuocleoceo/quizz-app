import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import DashedLine from 'react-native-dashed-line';
import useQuizzAPI from "../hooks/useQuizzAPI"
import { useSelector } from 'react-redux';

export default function QuizzScreen()
{
    const { listQuizz, isLoading, currentQuizz } = useSelector(state => state.quizz);
    const { Load_Quizz_API } = useQuizzAPI();
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
                    <View style={styles.topBar}>
                        <Text style={styles.currentCount}>
                            Question {quizzIndex}/
                            <Text style={styles.quizzLength}>{listQuizz.length}</Text>
                        </Text>
                    </View>

                    <View style={styles.dottedLine}>
                        <DashedLine dashLength={5} dashColor="#667186" />
                    </View>

                    <View style={styles.question}>
                        <Text style={styles.questionContent}>
                            {currentQuizz.question}
                        </Text>
                    </View>

                    <View style={styles.answer}>
                        {
                            currentQuizz.choices.map(c => (
                                <Text>{c}</Text>
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
    topBar: {
        flex: 1,
        top: 20
    },
    currentCount: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#667186",
    },
    quizzLength: {
        fontSize: 12,
        color: "#667186"
    },

    dottedLine: {
        flex: 1,
        alignSelf: "center"
    },

    question: {
        flex: 1,
    },
    questionContent: {
        color: "white",
        fontSize: 15,
    },

    answer: {
        flex: 6
    }
});