import React from "react"
import { Button, Text } from "react-native"
import Contactos from "../components/Contactos"
export default function HomeScreen({navigation}){
    return(
        <>
            <Button
                title="Ir a temperatura"
                onPress={() => navigation.navigate("TempDateScreen")}
            ></Button>
            <Contactos></Contactos>
        </>
    )
}