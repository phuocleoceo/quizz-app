import { StyleSheet, Text } from 'react-native';
import React from "react";

export default function Question({ currentQuizz })
{
    /*
    currentQuizz : câu hỏi hiện tại
    */
    return (
        <Text style={styles.questionContent}>
            {currentQuizz.question}
        </Text>
    )
}


const styles = StyleSheet.create({
    questionContent: {
        color: "#b5aeae",
        fontSize: 15,
    },
});