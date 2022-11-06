import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput,Vibration, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';

export default function Contactos() {
  let [error, setError] = useState(undefined);
  let [contactos, setContactos] = useState(undefined);
  const [search, setSearch] = useState('')

  function mostrarError(){
      Alert.alert("Error",error)
      Vibration.vibrate([1000,400,100],false)
  }

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Birthday, Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
        });

        if (data.length > 0) {
          setContactos(data);
        } else {
          setError("No se han encontrado contactos");
          mostrarError()
          setError(undefined)
        }
      } else {
        setError("El acceso ha sido denegado.");
        mostrarError()
        setError(undefined)
      }
    })();
  }, []);

  let getContactData = (data, property) => {
    if (data) {
      return data.map((data, index) => {
        return (
          <View key={index}>
            <Text>{data.label}: {data[property]}</Text>
          </View>
        )
      });
    }
  }

  let getContactRows = () => {
    if ((contactos !== undefined)) {
      if (search != "") {
        return contactos.filter(e => e.firstName == search).map((contact, index) => {
          return (
            <View key={index} style={styles.contact}>
              <Text>Name: {contact.firstName} {contact.lastName}</Text>
              {contact.birthday ? <Text>Birthday: {contact.birthday.month}/{contact.birthday.day}/{contact.birthday.year}</Text> : undefined}
              {getContactData(contact.phoneNumbers, "number")}
              {getContactData(contact.emails, "email")}
            </View>
          );
        });

      } else {
        return contactos.map((contact, index) => {
          return (
            <View key={index} style={styles.contact}>
              <Text>Name: {contact.firstName} {contact.lastName}</Text>
              {contact.birthday ? <Text>Birthday: {contact.birthday.month}/{contact.birthday.day}/{contact.birthday.year}</Text> : undefined}
              {getContactData(contact.phoneNumbers, "number")}
              {getContactData(contact.emails, "email")}
            </View>
          );
        });
      }
    } else {
      return <Text>Esperando Contactos...</Text>
    }
  }



  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ marginTop: 80 }}>ESTA ES SU LISTA DE CONTACTOS:</Text>
      <TextInput style={{
        height: 40,
        margin: 1,
        borderWidth: 1,
        padding: 10,
        width: '80%'
      }}
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar contacto"
      ></TextInput>
      <ScrollView>
        {getContactRows()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contact: {
    marginVertical: 8,
    marginBotton: 50,
    marginTop: 32
  }
});
