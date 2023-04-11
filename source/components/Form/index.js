import React, {useState} from "react"
import {TextInput, View, Text, Button} from "react-native"
import ResultIMC from "./ResultIMC/"

export default function Form(){



    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                    placeholder="Ex.: 1.82"
                    keyboardType="numeric"></TextInput>
                <Text>Peso</Text>
                <TextInput 
                    placeholder="Ex.: 99.78"
                    keyboardType="numeric"></TextInput>
                <Button title="Calcular IMC"></Button>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC}></ResultIMC>
        </View>
    );
}