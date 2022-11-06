import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, View,Text } from 'react-native';
import axios from 'axios';

export default function Temperatura() {
  const [location, setLocation] = useState(null);
  const [error, setErrorMsg] = useState("")
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);
  
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
      setLatitud(location.coords.latitude);
      setLongitud(location.coords.longitude);
      if(latitud && longitud) {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&appid=8e3d5e96633454f5ec7599983eb5e3d5`)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
      }
    })();
  }, []);

  return (
    <>
        <Text>{longitud}</Text>
        <Text>{latitud}</Text>
    </>
  );
}