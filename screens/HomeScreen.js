import React from "react"
import { Button, Text } from "react-native"
export default function HomeScreen({navigation}){
    return(
        <>
            <Button
                title="Ir a temperatura"
                onPress={() => navigation.navigate("TempDateScreen")}
            ></Button>

            <Button
                style={{ margin: "20px" }}
                title="Ir a contactos"
                onPress={() => navigation.navigate("ContactosScreen")}
            ></Button>
            <Button
                style={{ margin: "20px" }}
                title="Ir a mensaje emergencia"
                onPress={() => navigation.navigate("MensajeEmergenciaScreen")}
            ></Button>
        </>
    )
}