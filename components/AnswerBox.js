import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from "react";

export default function AnswerBox({ answer })
{

    return (
        <TouchableOpacity style={styles.answerBox}>
            <Text style={styles.answerContent}>{answer}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    answerBox: {
        borderWidth: 4,
        borderRadius: 10,
        borderColor: "#264c61",
        padding: 12,
        margin: 10
    },
    answerContent: {
        color: "white"
    }
});