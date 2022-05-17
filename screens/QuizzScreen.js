import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import useQuizzAPI from "../hooks/useQuizzAPI"
import { useSelector } from 'react-redux';

export default function QuizzScreen()
{
    const { isLoading } = useSelector(state => state.quizz);

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
                isLoading
                    ?
                    <Text>Loading</Text>
                    :
                    <Text>Done</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: "center"
    },
});