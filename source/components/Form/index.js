import React, {useState} from "react"
import {TextInput, View, Text, Button} from "react-native"
import ResultIMC from "./ResultIMC/"

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura");
    const [IMC, setIMC] = useState(null);
    const [TextButton, setTextButton] = useState("Calcular");

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