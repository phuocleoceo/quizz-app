import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from "react";

export default function AnswerBox({ answer, isChoosen, index, onChoosen, isPressed, trueAnswer })
{
    /*
    answer : câu trả lời
    isChoosen : câu này có đuọc chọn không ?
    index : index của câu trả lời hiện tại
    onChoosen : cập nhật lại index của câu trả lời đang đươc chọn thành index của câu này
    isPressed : đã press để chọn câu trả lời hay chưa
    trueAnswer : câu trả lời đúng
    */
    return (
        <TouchableOpacity disabled={isPressed} onPress={() => onChoosen(index)}
            style={[styles.answerBox,
            isPressed && trueAnswer === answer && { borderColor: "#16630e" },
            isPressed && trueAnswer !== answer && { borderColor: "#8a1919" }]}
        >
            {
                isChoosen
                    ?
                    <View style={styles.circleChoosen1}>
                        <View style={styles.circleChoosen2}></View>
                    </View>
                    :
                    <View style={styles.circle}></View>
            }
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
        margin: 10,
        flexDirection: "row"
    },
    answerContent: {
        color: "#b5aeae"
    },
    circle: {
        borderWidth: 2,
        borderColor: "#286180",
        width: 18,
        height: 18,
        borderRadius: 18,
        marginRight: 15,
    },
    circleChoosen1: {
        borderWidth: 2,
        borderColor: "#286180",
        width: 18,
        height: 18,
        borderRadius: 18,
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    circleChoosen2: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: "#109094",
    }
});