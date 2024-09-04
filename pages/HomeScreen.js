import React, {useEffect} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function HomeScreen({route, navigation}) {
    const {username, password} = route.params || {};


    const Produtos = () => {
        navigation.navigate('Produtos', {

        });
    }

    const Perfil = () => {
        navigation.navigate('Perfil', {

        });
    }



    useEffect(() => {
        console.log('Tela Home carregada');

    }, [username, password]);


    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <View style={styles.texto}>
                    <Text style={styles.texto}>Seja Bem Vindo!</Text>
                    {username && <Text style={styles.texto}>{username}</Text>}
                </View> 
                              
                <View>
                    <Image source={require('../assets/bicicleta.png')} style={styles.logo}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={Produtos}>
                    <Text style={styles.textButton}>Produtos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Perfil}>
                    <Text style={styles.textButton}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',

    },
    backgroundContainer: {
        width: '100%',
        height: '98%',
        padding: 20,
        backgroundrColor: '#684156',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
        fontSize: 26,
    },

    logo: {
        
        width: 250,
        height: 300,
        margin: 40
    },

    texto: {
        fontSize: 30,
        fontWeight:'bold',
        fontColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      },


      button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown',
        borderRadius: 10,
        margin: 30,
        padding: 10,
        height: 85,
        width: '100%',
      }, 
      textButton: {
        fontSize: 18,
        color: 'white',
      },

      
});