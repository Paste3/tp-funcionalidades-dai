import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, View,Text } from 'react-native';
import axios from 'axios';

export default function Temperatura() {
  const [location, setLocation] = useState(null);
  const [error, setErrorMsg] = useState("")
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  
  useEffect(() => {
    (async () => {
      // Pedir permiso de ubicacion al celular
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      // Traer la ubicacion actual
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      JSON.stringify(location);
      console.log(location.coords.latitude)
      console.log(location.coords.longitude)
      setLatitud(location.coords.latitude);
      setLongitud(location.coords.longitude);
    })();
  }, []);

  axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitud}&lon=${longitud}&appid=52992a09808232c0bcc0b01431de8803`)
  .then(function (response) {
      console.log(response)

  })
  .catch(function (error) {
      console.log(error);
  })

  return (
    <>
        <Text>{response}</Text>
    </>
  );
}
const styles = StyleSheet.create({
circle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: "gray"
}
});