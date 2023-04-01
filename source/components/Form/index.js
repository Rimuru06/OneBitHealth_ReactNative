import React from "react"
import {TextInput, View} from "react-native"

export default function Form(){
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput></TextInput>
                <Text>Peso</Text>
                <TextInput></TextInput>
            </View>
        </View>
    );
}