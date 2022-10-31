# tp-funcionalidades-dai

## Funcionalidades elegidas: 

###   ●Contactos: Pantalla de visualización de todos los Contactos del Teléfono utilizando la FlatList. Se debe mostrar el Nombre y Apellido / Número telefónico y un indicador si es el Numero de Contacto predeterminado de emergencia (con algún icono o similar)  

## 

###   ● Mensajes al usuario:  Cada vez que se muestre un error, tanto sea por la validación de los campos  o porque no se cuenta con un permiso / errores de accesos a una API, Storage etc.. se deben mostrar con un Alert y al mismo tiempo el dispositivo debe Vibrar. Se recomienda hacer un componente reutilizable o un Helper que desde todos los lugares se invoque al mismo para que la funcionalidad se encuentre encapsulada y no dispersa por todo el código.  

## 

###   ● Hora actual / Temperatura: La aplicación debe contar con una pantalla de visualización de la fecha y hora, temperatura actual (API de clima / Axios) y ubicación. La Temperatura se debe poder obtener según el geoposicionamiento del dispositivo (Location).  

## 

###   ● Llamado de Emergencia:  Cuando en la pantalla principal se sacuda rápidamente (sensores / accelerometer) se debe enviar un SMS/Mensaje vía WhatsApp al número configurado para tal fin. 