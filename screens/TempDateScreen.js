import React from "react"
import { Text , Button } from "react-native"
import Temperatura from "../components/Temperatura"

export default function TempDateScreen ({navigation}) {
    
    return(
        <>
            <Text>Esta es la TempDateScreen</Text>
            <Temperatura></Temperatura>
            <Button
                title="Ver hora"
                onPress={() => navigation.navigate("VerHoraScreen")}
            ></Button>
        </>
    )
}