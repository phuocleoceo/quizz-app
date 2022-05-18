import { StyleSheet, Text } from 'react-native';
import React from "react";

export default function AnswerCount({ listQuizz, quizzIndex })
{
    /*
    listQuizz : danh sách câu hỏi
    quizzIndex : index của câu hiện tại đang hiển thị
    */
    return (
        <Text style={styles.currentCount}>
            Question {quizzIndex}/
            <Text style={styles.quizzLength}>{listQuizz.length}</Text>
        </Text>
    )
}


const styles = StyleSheet.create({
    currentCount: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#667186",
        marginBottom: 25
    },
    quizzLength: {
        fontSize: 12,
        color: "#667186"
    },
});