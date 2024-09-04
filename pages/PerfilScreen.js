import React, {useEffect} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function PerfilScreen({route}) {
    const {username, password} = route.params || {};

    useEffect(() => {
        console.log('Tela do Perfil Carregada');

    }, [username, password]);


    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <View style={styles.text}>
                    <Text style={styles.text}>Seja Bem-Vindo à Tela do Perfil!</Text>
                </View> 
                              
                
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
        paddingTop: 300,
        backgroundrColor: '#684156',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        justifyContent:'cemter',
        alignItems: 'center',
        fontSize: 120,
        
        

    
    },

    text: {
        fontSize: 40,
        fontWeight:'bold',
        fontColor: 'blue',
        
        justifyContent:'right',
        alignItems: 'center',
      },

  
  

      
});