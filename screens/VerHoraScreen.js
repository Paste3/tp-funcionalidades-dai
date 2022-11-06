import { Text, View,StyleSheet} from "react-native";

export default function VerHoraScreen(){
    var date = new Date();
    var minutos = date.getMinutes()
    var segundos = date.getSeconds()
    var horas = date.getHours()
    if(minutos < 10){
        minutos = "0" + date.getMinutes()
    }
    if(segundos < 10){
        segundos = "0" + date.getSeconds()
    }
    if(horas < 10){
        horas = "0" + date.getHours()
    }
    return(
        <View>
            <Text>{horas}:{minutos}:{segundos}</Text>
        </View>
    )
}