import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from "react";

export default function Loading()
{
    return (
        <View>
            <ActivityIndicator style={styles.indicator} size="large" color="#b5aeae" />
            <Text style={styles.loadingText}>Loading...</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    indicator: {
        fontSize: 50
    },
    loadingText: {
        marginTop: 10,
        color: "#b5aeae",
        fontSize: 17
    }
});