import React from "react"
import {TextInput, View, Text, Button} from "react-native"

export default function ResultIMC(props){
    return (
        <View>
            <Text>{props.resultIMC}</Text>
            <Text>{props.messageResultIMC}</Text>
        </View>
    );
}