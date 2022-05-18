import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from "react";

export default function NextQuizz({ onNextQuizz })
{

    return (
        <TouchableOpacity style={styles.nextButton} onPress={onNextQuizz}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    nextButton: {
        borderRadius: 25,
        alignSelf: 'center',
        width: "22%",
        padding: 15,
        backgroundColor: "#008ae9",
        marginTop: 10
    },
    buttonText: {
        color: "#d1cdcd",
        textAlign: "center",
        fontSize: 15
    }
});