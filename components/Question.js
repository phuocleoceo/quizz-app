import { StyleSheet, Text } from 'react-native';
import React from "react";

export default function Question({ currentQuizz })
{

    return (
        <Text style={styles.questionContent}>
            {currentQuizz.question}
        </Text>
    )
}


const styles = StyleSheet.create({
    questionContent: {
        color: "white",
        fontSize: 15,
    },
});